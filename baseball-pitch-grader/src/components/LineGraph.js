import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const generateLineGraphData = (inputLabels, scores1, scores2) => {
  return {
    labels: inputLabels,
    datasets: [
      {
        label: 'Player Scores',
        data: scores1,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Average Scores',
        data: scores2,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };
};

const LineGraph = ({ updateGraphData }) => {
  console.log("Passed data: ", updateGraphData)
  const [scores1, setScores1] = useState([]);
  const inputLabels = ['Velocity', 'Ind. Vert Break', 'Horz Break', 'Spin Rate', 'RelHeight', 'Extension', 'Vert App Angle']; // Update with your input labels
  const scores2 = [5, 5, 7, 0, 5, 5, 2]; // Update with your scores for line 2

  useEffect(() => {
    console.log('updateGraphData:', updateGraphData); // Log the data
    setScores1(updateGraphData);
  }, [updateGraphData]); // Empty dependency array ensures this effect runs once, like componentDidMount
  
  const data = generateLineGraphData(inputLabels, scores1, scores2);

  const options = {
    scales: {
      x: {
        type: 'category',
        grid: {
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 10, // Adjust as needed
        grid: {
          drawBorder: false,
        },
      },
    },
  };
  
  return <Line data={data} options={options} />;
};

export default LineGraph;
