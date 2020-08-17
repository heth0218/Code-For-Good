import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

const Charts = () => {
    const state = {
        labels: ['Collaboration', 'Critical Thinking', 'Flexibility'],
        datasets: [
            {
                label: 'Trait',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80]
            }
        ],
        labels: ['Collaboration', 'Critical Thinking', 'Flexibility'],
        datasets: [
            {
                label: 'Collaboration',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                ],
                data: [65, 59, 80]
            }
        ]
    }

    return (
        <div className="container">
            <h1 className="teal-text">Student Data</h1>
            <div className="s12 l6">
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Student Analysis(Last Weeks Data)',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <div className="s12 l6" style={{ marginTop: "100px" }}>
                {/* <Pie
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Student Capabilities',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                /> */}

                <Doughnut
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Student Capabilities',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Charts
