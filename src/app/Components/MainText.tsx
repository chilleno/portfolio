import React from 'react';

interface MainTextProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "flex flex-row pt-10 sm:px-12 sm:text-justify text-xl font-thin text-white",
        light: "flex flex-row pt-10 sm:px-12 sm:text-justify text-xl font-thin text-black",
    },
};
const MainText: React.FC<MainTextProps> = ({ darkMode }) => {
    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="w-3/12 xl:inline lg:inline md:hidden sm:hidden" />
            <div className="xl:w-6/12 sm:w-full flex flex-col gap-5">
                <h1 className="font-normal">Hello there,</h1>
                <h1 className="font-bold">I&apos;m Antonio.</h1>
                <p className="">I&apos;m a software engineer since 2013.</p>
                <p className="">Currently specializing in JavaScript and TypeScript.</p>
                <p className="">I have a passion for helping new engineers in tech world.</p>
                <p className="">I started building software on public since 2023.</p>
                <p className="">I&apos;m currently based in Santiago, Chile 🇨🇱🌶️ and work at <a className="font-normal underline" href="https://www.imagemaker.com/">Imagemager S.A.</a> as a frontend engineer.</p>
            </div>
        </div>
    );
};

export default MainText;