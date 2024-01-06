import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode(newState: boolean): void;
};

let className = {
    main: {
        dark: "fixed top-0 left-0 w-full text-white bg-black py-4 px-8 flex content-center justify-center xl:gap-96 lg:gap-96 md:gap-96 sm:gap-12 z-50",
        light: "fixed top-0 left-0 w-full text-black bg-white py-4 px-8 flex content-center justify-center xl:gap-96 lg:gap-96 md:gap-96 sm:gap-12 z-50",
    }
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {

    const handleSetDarkMode = (): void => {
        localStorage.darkMode = !darkMode;
        setDarkMode(!darkMode);
    }

    return (
        <header className={darkMode ? className.main.dark : className.main.light}>
            <a href="/" className="hover:font-bold hover:cursor-pointer"><h1 className="text-md font-bold xl:mr-40 lg:mr-10">Antonio <span className="xl:inline lg:inline md:inline sm:hidden">González</span></h1></a>
            <div className="flex gap-5 text-md">
                <a href="/" className="hover:font-bold xl:min-w-[50px] lg:min-w-[50px]">Home</a>
                <a href="/cv" className="hover:font-bold xl:min-w-[30px] lg:min-w-[30px]">CV</a>
                <a href="/contact" className="hover:font-bold xl:min-w-[70px] lg:min-w-[70px]">Contact</a>
                <h1 className="hover:font-bold hover:cursor-pointer xl:min-w-[70px] lg:min-w-[70px]">
                    {
                        darkMode ?
                            <SunIcon onClick={handleSetDarkMode} className="h-5 w-5 text-white-500" />
                            :
                            <MoonIcon onClick={handleSetDarkMode} className="h-5 w-5 text-white-500" />
                    }
                </h1>
            </div>
        </header>
    );
};

export default Header;