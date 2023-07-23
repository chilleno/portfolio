import React from 'react';

interface FooterProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "fixed bottom-0 left-0 w-full font-normal text-white text-center py-4",
        light: "fixed bottom-0 left-0 w-full font-normal text-black text-center py-4",
    }
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={darkMode ? className.main.dark : className.main.light}>
            <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">© {currentYear}</a>
        </footer>
    );
};

export default Footer;