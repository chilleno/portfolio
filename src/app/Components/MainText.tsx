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
                <p className="">As a software engineer since 2013, I specialize in JavaScript and TypeScript. My passion lies in guiding new engineers in the tech world. Since 2023, I&apos;ve been actively building software by myself in my free time.</p>
                <p className="">I&apos;m currently located in Santiago, Chile 🇨🇱🌶️</p>
                <p className="">where I serve as a frontend engineer at <a className="font-normal underline" target='_blank' href="https://www.imagemaker.com/">Imagemager S.A.</a></p>
            </div>
        </div>
    );
};

export default MainText;