import React, { useState } from 'react';
import './styles.css';
import Spreadsheet from './components/Spreadsheet.js';
import InputForm from './components/InputForm.js';
import axios from 'axios';

const App = () => {
  const [columns, setColumns] = useState([
    'Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5',
    'Column 6', 'Column 7', 'Column 8', 'Column 9'
  ]);

  const [rows, setRows] = useState([]);

  const handleAddRow = (rowData) => {
    setRows([...rows, rowData]);
  };

  return (
    <div className="App">
      <h1>Baseball Pitch Grader</h1>
      <InputForm columns={columns} onAddRow={handleAddRow} />
      <Spreadsheet columns={columns} rows={rows} />
    </div>
  );
};

export default App;
