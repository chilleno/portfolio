import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode(newState: boolean): void;
};

let className = {
    main: {
        dark: "fixed top-0 left-0 w-full text-white py-4 px-8 flex content-center justify-center gap-96",
        light: "fixed top-0 left-0 w-full text-black py-4 px-8 flex content-center justify-center gap-96",
    }
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {

    const handleSetDarkMode = (): void => {
        localStorage.darkMode = !darkMode;
        setDarkMode(!darkMode);
    }

    return (
        <header className={darkMode ? className.main.dark : className.main.light}>
            <h1 className="text-md font-bold mr-40">Antonio González</h1>
            <div className="flex gap-5 text-md">
                <a href="/projects" className="hover:font-bold">Projects</a>
                <a href="/cv" className="hover:font-bold">CV</a>
                <a href="/contact" className="hover:font-bold">Contact</a>
                <h1 className="hover:font-bold hover:cursor-pointer">
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