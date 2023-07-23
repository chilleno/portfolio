'use client';

import { useState, useEffect } from 'react';

interface ButtonProps {
    url: string;
    icon: string;
    text: string;
    darkMode: boolean;
};

let icons = {
    dark: {
        github: "/icons/github-white.svg",
        linkedin: "/icons/linkedin-white.svg",
        twitter: "/icons/twitter-white.svg",
        instagram: "/icons/instagram-white.svg",
    },
    light: {
        github: "/icons/github-black.svg",
        linkedin: "/icons/linkedin-black.svg",
        twitter: "/icons/twitter-black.svg",
        instagram: "/icons/instagram-black.svg",
    },
};

let className = {
    button: {
        dark: "ring-2 ring-white text-white hover:ring-4 rounded-full py-2 px-3 flex gap-3 bg-black",
        light: "ring-2 ring-black text-black hover:ring-4 rounded-full py-2 px-3 flex gap-3 bg-white",
    }
}

const Button: React.FC<ButtonProps> = ({ url, icon, text, darkMode }) => {

    const [selectedIcon, setSelectedIcon] = useState<string>('');

    useEffect(() => {
        if (darkMode === true) {
            switch (icon) {
                case "github":
                    setSelectedIcon(icons.dark.github);
                    break;
                case "linkedin":
                    setSelectedIcon(icons.dark.linkedin);
                    break;
                case "twitter":
                    setSelectedIcon(icons.dark.twitter);
                    break;
                case "instagram":
                    setSelectedIcon(icons.dark.instagram);
                    break;
            }
        }
        if (darkMode === false) {
            switch (icon) {
                case "github":
                    setSelectedIcon(icons.light.github);
                    break;
                case "linkedin":
                    setSelectedIcon(icons.light.linkedin);
                    break;
                case "twitter":
                    setSelectedIcon(icons.light.twitter);
                    break;
                case "instagram":
                    setSelectedIcon(icons.light.instagram);
                    break;
            }
        }
    }, [darkMode]);

    return (
        <a href={url} target="_blank">
            <button
                className={darkMode ? className.button.dark : className.button.light}
            >
                <img
                    src={selectedIcon}
                    className="w-6 h-6"
                />
                {text}
            </button>
        </a>
    );
}

export default Button;