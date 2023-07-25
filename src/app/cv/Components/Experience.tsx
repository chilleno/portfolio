import React from 'react';

interface ExperienceProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "min-h-screen flex flex-row pt-20 sm:px-12 sm:text-justify text-xl font-thin text-white",
        light: "min-h-screen flex flex-row pt-20 sm:px-12 sm:text-justify text-xl font-thin text-black",
    },
};

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="xl:w-3/12 lg:w-2/12 xl:inline lg:inline md:hidden sm:hidden" />
            <div className="xl:w-6/12 lg:w-7/12 lg:ml-12 sm:w-full flex flex-col gap-5 h-full pb-20">
                <h1 className="font-bold text-4xl py-1">Experience</h1>
                <div className="flex flex-row gap-5 py-5">
                    <div>
                        <img
                            className="w-32"
                            src="/logos/imagemaker.jpeg"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Frontend Software Engineer</h1>
                        <h1 className="text-lg">Imagemaker · Full-time</h1>
                        <h1 className="text-lg">Mar 2022 - Present</h1>
                        <h1 className="text-lg">Chile</h1>
                        <p className="text-lg text-justify">
                            <b>Scotiabank</b>, República Dominicana based company project: Working on developing insurance inscription
                            features. React.JS, HTML, CSS, Node.JS, Scrum.
                            <br />
                            <b>Scotiabank</b>, República Dominicana based company project: Worked on developing new credit card activation
                            features. React.JS, HTML, CSS, Node.JS, Scrum.
                            <br />
                            <b>Turtle Fashion</b>, Switzerland based company project: Working on developing features for the
                            Turtle Fashion system. React.JS, HTML, CSS, Node.JS, Scrum.
                            <br />
                            <b>Qure4u</b>, U.S based company project: Working on developing new features and fixing existing
                            ones for their systems dedicated to solving problems from the Medical area. PHP, MySQL,
                            Scrum.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row gap-5 py-5">
                    <div>
                        <img
                            className="w-32"
                            src="/logos/sercotec.jpeg"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Software Engineer</h1>
                        <h1 className="text-lg">Sercotec · Full-time</h1>
                        <h1 className="text-lg">Mar 2020 - Mar 2022</h1>
                        <h1 className="text-lg">Chile</h1>
                        <p className="text-lg text-justify">
                            Worked on a survey system to lower the costs of external software licenses. Creating a new
                            system to automate the internal performance evaluation. MS SQL Server, C#, .net 4.5, JWT.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row gap-5 py-5">
                    <div>
                        <img
                            className="w-40"
                            src="/logos/santander.jpeg"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Senior Software Developer</h1>
                        <h1 className="text-lg">Banco Santander Chile · Full-time</h1>
                        <h1 className="text-lg">Sep 2018 - Mar 2020</h1>
                        <h1 className="text-lg">Chile</h1>
                        <p className="text-lg text-justify">
                            Leading the development of new requirements of the bank for the car credit system developed
                            on Oracle Service Cloud. Codeigniter, Jira, MS-SQL. Instructing the dev team in the bank
                            architecture, Javascript and PHP.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row gap-5 py-5">
                    <div>
                        <img
                            className="w-40"
                            src="/logos/mpsoft.png"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Tech Lead</h1>
                        <h1 className="text-lg">MPSoft · Full-time</h1>
                        <h1 className="text-lg">Jul 2016 - Mar 2020</h1>
                        <h1 className="text-lg">Chile</h1>
                        <p className="text-lg text-justify">
                            Taking projects of the most important clients of the company like Banco Santander Chile, Banco
                            Davivienda Colombia, among more. Instructing the dev team in Codeigniter, Javascript, Magento
                            and Oracle Service Cloud (Oracle Customer Portal)
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row gap-5 py-5">
                    <div>
                        <img
                            className="w-60"
                            src="/logos/codelovers.jpeg"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Co Owner, Web developer</h1>
                        <h1 className="text-lg">Codelovers Chile · Full-time</h1>
                        <h1 className="text-lg">Feb 2015 - Jul 2016</h1>
                        <h1 className="text-lg">Chile</h1>
                        <p className="text-lg text-justify">
                            My first startup, the knowledge acquired was huge. Lean Startup, Kanban and all the good stuff.
                            In this company we create software for school teachers that give tools and information to let
                            them use all of his time in the class. This software received financing from the Chilean state and
                            won first place in a contest in the university: Universidad de Santiago de Chile.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row gap-5 py-5">
                    <div>
                        <img
                            className="w-28"
                            src="/logos/suksa.jpeg"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Web Developer</h1>
                        <h1 className="text-lg">SuksaSuksa · Full-time</h1>
                        <h1 className="text-lg">Nov 2013 - Feb 2015</h1>
                        <h1 className="text-lg">Chile</h1>
                        <p className="text-lg text-justify">
                            My software development Job. Implement kanban methodology with Bitbucket creating new deployments for internal systems
                            with codeigniter, MySQL and Javascript.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;