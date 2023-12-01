import React, { useEffect } from 'react';
import PitchingDataLineGraph from './PitchingDataLineGraph';
import './GraphsPage.css';

const PDFGraphsPage = ({gData}) => {
  const [groupedData, setGroupedData] = React.useState(gData);

  useEffect(() => {
    setGroupedData(gData);
  }, [gData]);

  return (
    <div>
      {Object.keys(groupedData).map((key, index) => (
        <div key={key} id={`graph-container-${index}`}>
          <h2>{key.replace('_', ' - ')}</h2>
          <PitchingDataLineGraph data={groupedData[key].map(row => row.slice(3, -1))} />

          {/* Displaying data below each graph */}
          <div>
            <table className="graph-data">
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

export default PDFGraphsPage;
