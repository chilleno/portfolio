import React from 'react';
import Image from 'next/image';

interface AvatarProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "flex justify-center items-center pt-32",
        light: "flex justify-center items-center pt-32",
    },
    firstImage: {
        dark: "w-full h-full absolute transition-transform transform rounded-full ring-white ring-4",
        light: "w-full h-full absolute transition-transform transform rounded-full ring-black ring-4"
    },
    secondImage: {
        dark: "w-full h-full absolute rounded-full transition-transform transform rotate-y-180 opacity-0 hover:opacity-100 ring-white ring-4",
        light: "w-full h-full absolute rounded-full transition-transform transform rotate-y-180 opacity-0 hover:opacity-100 ring-black ring-4"
    }
};
const Avatar: React.FC<AvatarProps> = ({ darkMode }) => {
    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="w-48 h-48 relative image-flipper">
                <Image
                    src="/fit-into-society.jpeg"
                    alt="Fit into society"
                    className={darkMode ? className.firstImage.dark : className.firstImage.light}
                />
                <Image
                    src="/be-happy.png"
                    alt="Be happy"
                    className={darkMode ? className.secondImage.dark : className.secondImage.light}
                />
            </div>
        </div>
    );
};

export default Avatar;