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
    }, []);

    return (
        <a href={url} target="_blank">
            <button
                className="ring-2 ring-white hover:ring-4 rounded-full py-2 px-3 flex gap-3"
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