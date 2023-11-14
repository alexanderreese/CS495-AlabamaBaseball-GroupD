import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PitchingDataLineGraph = ({ data }) => {
  // Assuming the 2D array `data` has the following format for each row:
  // ['Velocity', 'Ind. Vert Break', 'Horz Break', 'Spin Rate', 'RelHeight', 'Extension', 'Vert App Angle']

  const datasetLabels = ['Velocity', 'Ind. Vert Break', 'Horz Break', 'Spin Rate', 'RelHeight', 'Extension', 'Vert App Angle'];

  const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(199, 199, 199, 0.6)',
  ];

  const datasets = data.map((row, index) => ({
    label: `Pitch ${index + 1}`,
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
