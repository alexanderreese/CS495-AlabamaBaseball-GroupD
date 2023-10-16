//import React from 'react';
import React, { useState } from 'react';
import PitchInputForm from './components/PitchInputForm';  // Import your PitchInputForm component
import './components/PitchInputForm.css';  // Import the CSS file for styling
import LineGraph from './components/LineGraph'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [graphData, setGraphData] = useState([0,0,0,0,0,0,0]);

  const handleSubmit = async () => {
    // Assuming you update the graphData after fetching data
    const fetchedData = await axios.post('http://localhost:5000/getScores');
    const temp = fetchedData.data.finalScores;
    setGraphData(temp);
    console.log(graphData);
  };

  return (
    <div className="title">
      <div>
        <Link to="/settings">Go to Settings</Link>
      </div>
      <h1>Baseball Pitch Grader</h1>
      <div className="container">
        <div className="inputForm">
          <PitchInputForm onSubmit={handleSubmit} />
        </div>
        <div className="graphContainer">
          <LineGraph updateGraphData={graphData} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;

