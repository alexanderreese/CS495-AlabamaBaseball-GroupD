import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ columns, onAddRow }) => {
  const [rowData, setRowData] = useState(Array(columns.length).fill(''));

  const handleInputChange = (index, value) => {
    const updatedRowData = [...rowData];
    updatedRowData[index] = value;
    setRowData(updatedRowData);
  };

  const handleAddRow = () => {
    onAddRow(rowData);
    setRowData(Array(columns.length).fill(''));
  };

  return (
    <div className="input-form">
      {columns.map((column, index) => (
        <input
          key={index}
          type="text"
          value={rowData[index]}
          placeholder={`Enter ${column}`}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="input-field" 
        />
      ))}
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default InputForm;
