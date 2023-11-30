import React, { useState } from 'react';
import axios from 'axios';
import './EditableTable.css';
import { useNavigate } from 'react-router-dom';
import extractDataFromCSV from './extractDataFromCSV';

const EditableTable = ({ data, columns, options }) => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState(data);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCellEdit = (rowIndex, columnIndex, value) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][columnIndex] = value;
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = [tableData[tableData.length - 1][0], tableData[tableData.length - 1][1], tableData[tableData.length - 1][2], '', '', '', '', '', '', ''];
    setTableData([...tableData, newRow]);
  };

  const handleSubmit = async () => {
    // TODO //////////////////////////////////////////////
    // Call python backend to grade each row in tableData
    // Iterate through each row in tableData
    const updatedTableData = await Promise.all(tableData.map(row => gradePitch(row)));

    // Update the state with the new array
    //setTableData(updatedTableData);


    // Use navigate to go to the graphs page with data
    navigate('/export-pdf', { state: { tableData: updatedTableData } });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
      if (!selectedFile) {
          alert("Please select a file first.");
          return;
      }

      extractDataFromCSV(selectedFile)
          .then(data => {
              setTableData(data);
          })
          .catch(err => {
              console.error("Error processing file:", err);
          });
    };

    const gradePitch = async (row) => {
      // Determine the handedness and pitch type
      let handedness = row[2] === "Right" ? "RH" : "LH";
      let pitchType = row[1].replace(/\s+/g, '_'); // Replace spaces with underscores
      // Construct the pitch_type variable
      let pitch_type = `${handedness}_${pitchType}`;

      try {
          const params = {
              pitch_type: pitch_type, 
              velocity: row[3], 
              ivBreak: row[4], 
              hBreak: row[5], 
              spinRate: row[6], 
              relHeight: row[7], 
              extension: row[8], 
              vAppAngle: row[9] 
          };
  
          const pitchGrade = await axios.get('http://localhost:5000/api/grade_pitch', { params });
          const pitchMetricGrades = await axios.get('http://localhost:5000/api/grade_split', { params });
          
          row[3] = pitchMetricGrades.data.velocity;
          row[4] = pitchMetricGrades.data.ivBreak;
          row[5] = pitchMetricGrades.data.hBreak;
          row[6] = pitchMetricGrades.data.spinRate;
          row[7] = pitchMetricGrades.data.relHeight;
          row[8] = pitchMetricGrades.data.extension;
          row[9] = pitchMetricGrades.data.vAppAngle;
          row[10] = pitchGrade.data.pitch_grade;

          console.log(pitchGrade.data);
          console.log(pitchMetricGrades.data);
          return row;
      } catch (error) {
          console.error('Error fetching data: ', error);
      }
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
      <table>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload CSV</button>
      </table>
    </div>
  );
};

export default EditableTable;
