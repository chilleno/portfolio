import React from 'react';

const FixedHeader: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full text-white py-4 px-8 flex content-center justify-center gap-96">
            <h1 className="text-md font-bold">Antonio González</h1>
            <div className="flex gap-5 text-md">
                <a href="/projects" className="hover:font-bold">Projects</a>
                <a href="/cv" className="hover:font-bold">CV</a>
                <a href="/contact" className="hover:font-bold">Contact</a>
                <h1 className="hover:font-bold hover:cursor-pointer">D/L</h1>
            </div>
        </header>
    );
};

export default FixedHeader;