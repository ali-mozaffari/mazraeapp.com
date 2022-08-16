import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import React from 'react';
import {Bar} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.defaults.font.family = 'IRANSans'

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             display: false,
//             position: 'top',
//         },
//         title: {
//             display: false,
//             text: 'Chart.js Bar Chart',
//         },
//         labels: {
//             font: {
//                 size: 20
//             }
//         }
//     }, scales: {
//         y: {
//             beginAtZero: true
//         }
//     }
// };

// const labels = [
//     'شنبه',
//     'یکشنبه',
//     'دوشنبه'
// ];

// const colors = [
//     // 'rgb(44,105,154, 0.5)',
//     // 'rgb(22,219,147, 0.5)',
//     // 'rgb(255,140,25, 0.5)'
//     '#2C689A'
// ]

// export const data = {
//     labels,
//     datasets: [
//         {
//             data: [5, 13, 50],
//             backgroundColor: colors.map((item) => item),
//             borderRadius: 10,

//         }
//     ],
// };

const RainChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
            labels: {
                font: {
                    size: 20
                }
            }
        }, scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    
    const labels = [
        'شنبه',
        'یکشنبه',
        'دوشنبه'
    ];
    
    const colors = [
        // 'rgb(44,105,154, 0.5)',
        // 'rgb(22,219,147, 0.5)',
        // 'rgb(255,140,25, 0.5)'
        '#2C689A'
    ]
    
    const data = {
        labels,
        datasets: [
            {
                data: [5, 13, 50],
                // backgroundColor: colors.map((item) => item),
                backgroundColor: colors,
                borderRadius: 10,
                
            }
        ],
        options: {
            layout: {
                padding: {left: 50, right: 50}
            }
        }
    };
    
    return (
        <div>
            <Bar options={options} data={data}/>    
        </div>
    );
};

export default RainChart;
