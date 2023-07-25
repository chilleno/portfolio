import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import Button from '../../Components/Button';

interface MainTextProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "flex flex-row pt-32 sm:px-12 sm:text-justify text-xl font-thin text-white",
        light: "flex flex-row pt-32 sm:px-12 sm:text-justify text-xl font-thin text-black",
    },
};

const MainText: React.FC<MainTextProps> = ({ darkMode }) => {
    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="xl:w-3/12 lg:w-1/6 xl:inline lg:inline md:hidden sm:hidden" />
            <div className="xl:w-6/12 lg:w-7/12 lg:ml-12 sm:w-full flex flex-col gap-5">
                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-3">
                    <h1 className="font-bold xl:text-4xl md:text-4xl sm:text-4xl lg:text-3xl py-1 justify-center content-center flex">Antonio González</h1>
                    <div className="flex flex-row gap-5 content-center justify-center">
                        <Button
                            url="https://github.com/chilleno"
                            icon="github"
                            text="GitHub"
                            darkMode={darkMode}
                        />
                        <Button
                            url="https://www.linkedin.com/in/antoniongonzalezf/"
                            icon="linkedin"
                            text="LinkedIn"
                            darkMode={darkMode}
                        />
                    </div>
                    <div className="flex flex-row gap-1 content-center justify-center p-2">
                        <MapPinIcon className="h-6 w-6 text-red-500" />
                        <h1 className="font-bold text-lg">Stgo. Chile</h1>
                    </div>
                </div>
                <p className="text-lg text-justify">
                    I&apos;m a software engineer since 2013.
                    Currently specializing in JavaScript and TypeScript.
                    I have a passion for helping new engineers in tech world.
                    I started building software on public since 2023.
                </p>
                <p className="text-lg text-justify">
                  I&apos;m currently building in public projects with Next.js, React.js, Prisma, TaildwindCSS, MongoDB and Figma. 
                </p>
            </div>
        </div>
    );
};

export default MainText;