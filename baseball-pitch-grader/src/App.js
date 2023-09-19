//import React from 'react';
import React, { useState } from 'react';
import PitchInputForm from './components/PitchInputForm';  // Import your PitchInputForm component
import './components/PitchInputForm.css';  // Import the CSS file for styling
import SettingsPage from './components/SettingsPage';  // Import your SettingsPage component
import LineGraph from './components/LineGraph'; 

const App = () => {
  const [graphData, setGraphData] = useState([]);

  const updateGraphData = (data) => {
    setGraphData(data);
  };

  return (
    <div className="title">
      <h1>Baseball Pitch Grader</h1>
      <div className="container">
        <div className="inputForm">
          <PitchInputForm />
        </div>
        <div className="graphContainer">
          <LineGraph updateGraphData={updateGraphData} />
        </div>
      </div>
    </div>
  );
}

export default App;

