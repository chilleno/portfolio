'use client';

import React from 'react';
import Button from './Button';

let links = [
  {
    url: "https://github.com/chilleno",
    icon: "github",
    text: "GitHub",
  },
  {
    url: "https://www.linkedin.com/in/antoniongonzalezf/",
    icon: "linkedin",
    text: "LinkedIn",
  },
  {
    url: "https://twitter.com/chill__eno",
    icon: "twitter",
    text: "Twitter",
  },
  {
    url: "https://www.instagram.com/chill.eno/",
    icon: "instagram",
    text: "Instagram",
  },
]

interface LinkProps {
  darkMode: boolean;
};

let className = {
  main: {
    dark: "flex justify-center items-center pt-32 gap-5",
    light: "flex justify-center items-center pt-32 gap-5",
  }
}

const Links: React.FC<LinkProps> = ({ darkMode }) => {
  return (
    <div className={darkMode === true ? className.main.dark : className.main.light}>
      {
        links.map((link, index) => (
          <Button
            key={"button_social_" + index}
            url={link.url}
            icon={link.icon}
            text={link.text}
            darkMode={darkMode}
          />
        ))
      }
    </div>
  );
};

export default Links;