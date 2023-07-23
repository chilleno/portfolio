import React from 'react';

const Avatar: React.FC = () => {
    return (
        <div className="flex justify-center items-center mt-32">
            <div className="w-48 h-48 relative image-flipper">
                <img
                    src="/fit-into-society.jpeg"
                    alt="Fit into society"
                    className="w-full h-full absolute transition-transform transform rounded-full"
                />
                <img
                    src="/be-happy.png"
                    alt="Be happy"
                    className="w-full h-full absolute rounded-full transition-transform transform rotate-y-180 opacity-0 hover:opacity-100"
                />
            </div>
        </div>
    );
};

export default Avatar;