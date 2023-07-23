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

const Links: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-32 gap-5">
      {
        links.map((link, index) => (
          <Button
            key={"button_social_" + index}
            url={link.url}
            icon={link.icon}
            text={link.text}
            darkMode={true}
          />
        ))
      }
    </div>
  );
};

export default Links;