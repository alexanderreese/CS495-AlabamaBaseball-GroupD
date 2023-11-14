import React, { useState } from 'react';
import axios from 'axios';
import './EditableTable.css';
import { useNavigate } from 'react-router-dom';

const EditableTable = ({ data, columns, options }) => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState(data);

  const handleCellEdit = (rowIndex, columnIndex, value) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][columnIndex] = value;
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = [tableData[tableData.length - 1][0], tableData[tableData.length - 1][1], tableData[tableData.length - 1][2], '', '', '', '', '', '', ''];
    setTableData([...tableData, newRow]);
  };

  const handleSubmit = () => {
    // Use navigate to go to the graphs page with data
    navigate('/graphs', { state: { tableData: tableData } });
  };

  return (
    <div>
      <table className="editable-table">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  {columnIndex <= 2 && columnIndex >= 1 ? (
                    <select
                      value={cell}
                      onChange={(e) => handleCellEdit(rowIndex, columnIndex, e.target.value)}

                    >
                      <option value="">Select...</option>
                      {options[columnIndex-1].map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : columnIndex === 0 ? (
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleCellEdit(rowIndex, columnIndex, e.target.value)}
                      className="name-cell" // Apply the 'name-cell' class
                    />
                  ) : (
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleCellEdit(rowIndex, columnIndex, e.target.value)}
                      className='input-cell'
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={handleSubmit}>Submit</button> 
    </div>
  );
};

export default EditableTable;
