import React, { useState } from 'react';
//import './styles.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditableTable from './components/EditableTable';
import ExportPDF from './components/ExportPDF';

const App = () => {
  const initialData = [[null, null, null, null, null, null, null, null, null, null]];
  const columns = [
    'Pitcher Name',
    'Pitch Type', 
    'Hand', 
    'Velocity', 
    'Ind. Vert Break', 
    'Horz Break', 
    'Spin Rate', 
    'RelHeight', 
    'Extension', 
    'Vert App Angle'
  ];
  const pitchTypes = [
    '4S Fastball',
    '2S Fastball',
    'SI Fastball',
    'CT Fastball',
    'Cutter',
    'Gyro Slider',
    'Slider',
    'Slutter',
    'Sweeper',
    'Slurve',
    '12/6',
    'Traditional CH',
    'Sidespin SH',
    'Splitter'
  ];
  const handTypes = ['Right', 'Left'];

  return (
    <div>
      <h1>Baseball Pitch Grader</h1>
      <Router>
        <Routes>
          <Route path="/" element={<EditableTable data={initialData} columns={columns} options={[pitchTypes, handTypes]} />} />
          <Route path="/export-pdf" element={<ExportPDF />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

