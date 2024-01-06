import React, { useEffect, useState } from 'react';
import ActivityGraph from './ActivityGraph';
import fetchCommitData from '../util/fetchCommitData';

interface ProjectDetailProps {
    darkMode: boolean;
    repository: string;
    link: string;
    description: string;
    extraInfo?: string;
};

let className = {
    main: {
        dark: "flex xl:flex-row lg:flex-row md:flex-col sm:flex-col pt-20 gap-5 xl:px-0 lg:px-0 md:px-0 sm:px-0 text-xl font-thin text-white",
        light: "flex xl:flex-row lg:flex-row md:flex-col sm:flex-col pt-20  xl:px-0 lg:px-0 md:px-0 sm:px-0 text-xl font-thin text-black",
    },
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ darkMode, repository, link, description, extraInfo }) => {
    const [labels, setLabels] = useState<string[]>([]);
    const [values, setValues] = useState<number[]>([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getLast7DaysOfWeek = () => {
        const today = new Date();
        const last7Days = [];

        for (let i = 150; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const month = monthNames[date.getMonth()];
            const formattedDate = `${month} ${date.getDate()}`;
            last7Days.push(formattedDate);
        }
        console.log(last7Days);
        return last7Days;
    };

    const initializeValues = () => {
        let returnValues: number[] = []
        for (let i = 0; i <= 150; i++) {
            returnValues.push(0);
        }
        return returnValues;
    }

    useEffect(() => {
        fetchCommitData('chilleno', repository).then((data) => {
            let labels: string[] = getLast7DaysOfWeek();
            let values: number[] = initializeValues();
            data.map((element: any) => {
                let commitDate = new Date(element.commit.committer.date);
                let currentLabel = monthNames[commitDate.getMonth()] + ' ' + commitDate.getDate();
                if (labels.indexOf(currentLabel) >= 0 && (values[labels.indexOf(currentLabel)] === undefined)) {
                    values[labels.indexOf(currentLabel)] = 0;
                }
                values[labels.indexOf(currentLabel)] = values[labels.indexOf(currentLabel)] + 1;
            })
            setLabels(labels);
            setValues(values);
        });
    }, []);

    return (
        <div className={darkMode ? className.main.dark : className.main.light}>
            <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full gap-10 flex flex-col">
                <div>
                    <a className="font-bold underline text-4xl" target="_blank" href={link}><h1>{repository}</h1></a>
                </div>
                <div>
                    <p className="text-xl xl:pr-20 lg:pr-20 md:pr-0 sm:pr-0">{description}</p>
                </div>
                {
                    extraInfo &&
                    <div>
                        <b className="text-xl xl:pr-20 lg:pr-20 md:pr-0 sm:pr-0">{extraInfo}</b>
                    </div>
                }
            </div>
            <div className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full flex  items-center">
                <div className="max-h-[90px] flex border boder-2 border-white rounded-xl">
                    {
                        <ActivityGraph
                            darkMode={darkMode}
                            labels={labels}
                            values={values}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;