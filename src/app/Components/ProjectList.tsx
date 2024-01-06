import ProjectDetail from "./ProjectDetail";

interface ProjectListProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "min-h-screen flex flex-row pt-20 xl:px-0 lg:px-0 md:px-12 sm:px-12 text-xl font-thin text-white",
        light: "min-h-screen flex flex-row pt-20  xl:px-0 lg:px-0 md:px-12 sm:px-12 text-xl font-thin text-black",
    },
};

interface Project {
    repository: string;
    private: boolean;
    link: string;
    description: string;
    extraInfo?: string;
}

let projects: Project[] = [
    {
        repository: "HabitHarbor",
        private: true,
        link:"https://habitharbor.app/",
        description: 'An app inspired by the principles of the "Atomic Habits" book, HabitHarbor is more than just a task manager. It features a comprehensive suite, including a Pomodoro Clock, Water Intake Tracker, and more.',
        extraInfo:"Get #14 on Product Hunt, with 30+ upvotes."
    },
    {
        repository: "NSFTA",
        private: true,
        link:"https://nsfta.vercel.app/",
        description: "A web project inspired by a podcast topic that caught my interest. The primary objective of this repository was to delve into the intricacies of Tailwind CSS and Next.js, contributing to my ongoing learning journey."
    },
]

const ProjectList: React.FC<ProjectListProps> = ({ darkMode }) => {
    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="xl:w-3/12 lg:w-2/12 xl:inline lg:inline md:hidden sm:hidden" />
            <div className="xl:w-6/12 lg:w-7/12 xl:ml-6 lg:ml-12  sm:w-full flex flex-col gap-5 h-full pb-20">
                <h1 className="font-bold text-4xl py-1">Personal Projects</h1>
                {
                    projects.map((project, index) => (
                        <ProjectDetail
                            key={'project_' + index}
                            darkMode={darkMode}
                            repository={project.repository}
                            link={project.link}
                            description={project.description}
                            extraInfo={project.extraInfo}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectList;