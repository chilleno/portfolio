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
                            <b>Scotiabank</b>, República Dominicana based company project:
                            Developing features for insurance inscription. Technologies: React.JS, HTML, CSS, Node.JS, Scrum.
                            <br />
                            <b>Scotiabank</b>, República Dominicana based company project:
                            Contributed to the development of new credit card activation features. Technologies: React.JS, HTML, CSS, Node.JS, Scrum.
                            <br />
                            <b>Turtle Fashion</b>, Switzerland based company project:
                            Working on enhancing features for the Turtle Fashion system. Technologies: React.JS, HTML, CSS, Node.JS, Scrum.
                            <br />
                            <b>Qure4u</b>, U.S based company project:
                            Involved in developing new features and resolving issues for their Medical area systems. Technologies: PHP, MySQL, Scrum.
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
                            Contributed to the development of a survey system aimed at reducing external software license costs. Additionally, played a key role in creating a new system for automating internal performance evaluations. Utilized technologies such as MS SQL Server, C#, .NET 4.5, and JWT.
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
                            Led the development of new requirements for the bank&apos;s car credit system on Oracle Service Cloud. Employed technologies such as Codeigniter, Jira, and MS-SQL. Provided instruction to the development team on bank architecture, emphasizing expertise in JavaScript and PHP.
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
                            Managed projects for major clients such as Banco Santander Chile and Banco Davivienda Colombia. Provided guidance to the development team with expertise in Codeigniter, JavaScript, Magento, and Oracle Service Cloud (Oracle Customer Portal).
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
                            Co-founded my first startup, acquiring extensive knowledge in Lean Startup, Kanban, and more. Our focus was on developing software for school teachers, providing tools and information to optimize their time in the classroom. This innovative software received financing from the Chilean state and secured first place in a contest at the Universidad de Santiago de Chile.
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
                            Implemented the Kanban methodology using Bitbucket, creating new deployments for internal systems. Utilized technologies such as Codeigniter, MySQL, and JavaScript.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;