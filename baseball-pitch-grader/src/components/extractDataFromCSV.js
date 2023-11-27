import Papa from 'papaparse';

const columnNames = [
    'Pitcher',
    'TaggedPitchType',
    'PitcherThrows',
    'EffectiveVelo',
    'InducedVertBreak',
    'HorzBreak',
    'SpinRate',
    'RelHeight',
    'Extension',
    'VertApprAngle',
];

function extractDataFromCSV(file) {
  return new Promise((resolve, reject) => {
      Papa.parse(file, {
          header: true,
          complete: (results) => {
              if (!Array.isArray(results.data)) {
                  reject(new Error("Parsed data is not an array"));
                  return;
              }

              const extractedData = results.data.map(row => {
                return columnNames.map(col => {
                  // Replace 'FastBall' with '4S FastBall'
                  if (row[col] === 'Fastball') {
                      return '4S Fastball';
                  }

                  // Check if the value is a number and round it
                  const value = parseFloat(row[col]);
                  if (!isNaN(value)) {
                      return parseFloat(value.toFixed(1)); // Round to one decimal place
                  }

                  return row[col]; // Return the original value if not a number
                });
              });

              resolve(extractedData);
          },
          error: (error) => {
              reject(error);
          }
      });
  });
}

export default extractDataFromCSV;
