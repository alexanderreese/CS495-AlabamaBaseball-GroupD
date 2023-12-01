import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PitchingDataLineGraph = ({ data }) => {
  // Assuming the 2D array `data` has the following format for each row:
  // ['Velocity', 'Ind. Vert Break', 'Horz Break', 'Spin Rate', 'RelHeight', 'Extension', 'Vert App Angle']

  const datasetLabels = ['Velocity', 'Ind. Vert Break', 'Horz Break', 'Spin Rate', 'RelHeight', 'Extension', 'Vert App Angle'];

  const colors = [
    'rgba(255, 99, 132, 0.6)', // Red
    'rgba(54, 162, 235, 0.6)', // Blue
    'rgba(255, 206, 86, 0.6)', // Yellow
    'rgba(75, 192, 192, 0.6)', // Greenish Cyan
    'rgba(153, 102, 255, 0.6)', // Purple
    'rgba(255, 159, 64, 0.6)', // Orange
    'rgba(199, 199, 199, 0.6)', // Gray
    'rgba(163, 73, 164, 0.6)', // Plum
    'rgba(255, 0, 0, 0.6)', // Bright Red
    'rgba(0, 128, 0, 0.6)', // Dark Green
    'rgba(0, 0, 255, 0.6)', // Bright Blue
    'rgba(128, 0, 128, 0.6)', // Magenta
    'rgba(255, 165, 0, 0.6)', // Orange (different shade)
    'rgba(0, 255, 127, 0.6)', // Spring Green
    'rgba(60, 179, 113, 0.6)' // Medium Sea Green
  ];


  const datasets = data.map((row, index) => ({
    label: index === 0 ? 'Average Scores' : `Pitch ${index}`,
    data: row,
    fill: false,
    backgroundColor: colors[index % colors.length],
    borderColor: colors[index % colors.length],
  }));

  const chartData = {
    labels: datasetLabels,
    datasets
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Pitching Data Comparison'
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default PitchingDataLineGraph;