import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const generateLineGraphData = (inputLabels, scores1, scores2) => {
  return {
    labels: inputLabels,
    datasets: [
      {
        label: 'Scores 1',
        data: scores1,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Scores 2',
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
  const [scores1, setScores1] = useState([]);
  const inputLabels = ['Input 1', 'Input 2', 'Input 3', 'Input 4', 'Input 5', 'Input 6', 'Input 7']; // Update with your input labels
  const scores2 = [5, 5, 5, 5, 5, 5, 5]; // Update with your scores for line 2

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/getScores');
        setScores1(response.data.finalScores);
        updateGraphData(response.data.finalScores); // Call the update function
      } catch (error) {
        console.error('Error populating graph:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once, like componentDidMount
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
