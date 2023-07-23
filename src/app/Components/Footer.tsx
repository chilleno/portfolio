import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 left-0 w-full font-normal text-white text-center py-4">
            <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">© {currentYear}</a>
        </footer>
    );
};

export default Footer;