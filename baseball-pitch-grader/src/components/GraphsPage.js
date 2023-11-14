import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PitchingDataLineGraph from './PitchingDataLineGraph';

const GraphsPage = () => {
  const location = useLocation();
  const [groupedData, setGroupedData] = React.useState({});

  useEffect(() => {
    if (!location.state?.tableData) return;
  
    // Creating a new copy of tableData
    const tableDataCopy = location.state.tableData.map(row => [...row, 100]);
  
    // Group data by the first two columns
    const grouped = groupByColumns(tableDataCopy);
    setGroupedData(grouped);
  }, [location.state?.tableData]); // Dependency array includes tableData from location.state
  

  // Function to group the table data by the first two columns
  const groupByColumns = (data) => {
    const groups = {};
    data.forEach((row) => {
      // Create a unique key for the group from the first two columns
      const groupKey = `${row[0]}_${row[1]}`;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      // Push the entire row (or the part you want to include) to the corresponding group
      groups[groupKey].push(row);
    });
    return groups;
  };

  return (
    <div>
      {Object.keys(groupedData).map((key) => (
        <div key={key}>
          <h2>Graph for {key.replace('_', ' & ')}</h2>
          <PitchingDataLineGraph data={groupedData[key].map(row => row.slice(3))} />

          {/* Displaying data below each graph */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Velocity</th>
                  <th>Ind. Vert Break</th>
                  <th>Horz Break</th>
                  <th>Spin Rate</th>
                  <th>RelHeight</th>
                  <th>Extension</th>
                  <th>Vert App Angle</th>
                  <th>Pitch Grade</th>
                </tr>
              </thead>
              <tbody>
                {groupedData[key].map((row, index) => (
                  <tr key={index}>
                    {row.slice(3).map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>

  );
};

export default GraphsPage;
