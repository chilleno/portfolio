import ProjectDetail from "./ProjectDetail";

interface ProjectListProps {
    darkMode: boolean;
};

let className = {
    main: {
        dark: "min-h-screen flex flex-row pt-20 xl:px-0 lg:px-0 md:px-12 sm:px-12 sm:text-justify text-xl font-thin text-white",
        light: "min-h-screen flex flex-row pt-20  xl:px-0 lg:px-0 md:px-12 sm:px-12 sm:text-justify text-xl font-thin text-black",
    },
};

interface Project {
    repository: string;
    description: string;
}

let projects: Project[] = [
    {
        repository: "chaintask",
        description: "App inspired in atomic habits book. Task manager, Pomodoro Clock, Water Drink Track and more."
    },
    {
        repository: "nsfta",
        description: "Web inspired in a topic of a podcast that I listen. The goal of this repo was learn tailwindCSS and Next.js."
    },
    {
        repository: "portfolio",
        description: "This is the page that you are currently navigating."
    },
]

const ProjectList: React.FC<ProjectListProps> = ({ darkMode }) => {
    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="xl:w-3/12 lg:w-2/12 xl:inline lg:inline md:hidden sm:hidden" />
            <div className="xl:w-6/12 lg:w-7/12 xl:ml-6 lg:ml-12  sm:w-full flex flex-col gap-5 h-full pb-20">
                <h1 className="font-bold text-4xl py-1">Projects</h1>
                {
                    projects.map((project, index) => (
                        <ProjectDetail
                            key={'project_' + index}
                            darkMode={darkMode}
                            repository={project.repository}
                            description={project.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectList;