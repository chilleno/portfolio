import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, PointElement, LineElement, LineController, LinearScale, Chart as ChartJS, Filler } from 'chart.js';

ChartJS.register(
    Filler,
    CategoryScale,
    LineController,
    LinearScale,
    PointElement,
    LineElement,
);


interface ActivityGraphProps {
    darkMode: boolean;
    labels: string[];
    values: number[];
};

const ActivityGraph: React.FC<ActivityGraphProps> = ({ darkMode, labels, values }) => {
    const data = {
        labels: labels,
        datasets: [{
            data: values,
            fill: true,
            borderColor: 'white',
            backgroundColor: 'white',
            tension: 0.5,
            showLine: false,
        }]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        pointStyle: false,
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
                beginAtZero: true,
                suggestedMax: 10,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return <Line
        data={data}
        options={chartOptions}
    />
};

export default ActivityGraph;
