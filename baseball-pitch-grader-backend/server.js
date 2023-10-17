// Read JSON files
const fs = require('fs');
const rawData = fs.readFileSync('./RH_4S_Fastball.json');
const metrics = JSON.parse(rawData);

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Use the express.json() middleware to parse JSON

// const metrics = [
//   { value: null, 
//     weight: 1.75, 
//     average: 90,
//     range: [
//       { min: 0, max: 80, score: 0 }, 
//       { min: 81, max: 82, score: 1 },
//       { min: 83, max: 84, score: 2 },
//       { min: 85, max: 87, score: 3 },
//       { min: 88, max: 89, score: 4 },
//       { min: 90, max: 91, score: 5 }, 
//       { min: 92, max: 93, score: 6 },
//       { min: 94, max: 95, score: 7 },
//       { min: 96, max: 97, score: 8 },
//       { min: 98, max: 99, score: 9 },
//       { min: 100, max: 110, score: 10 }
//     ] 
//   },  // Velocity
//   { value: null, 
//     weight: 1, 
//     average: 18,
//     range: [
//       { min: 0, max: 13, score: 0 }, 
//       { min: 14, max: 14, score: 1 },
//       { min: 15, max: 15, score: 2 },
//       { min: 16, max: 16, score: 3 },
//       { min: 17, max: 17, score: 4 },
//       { min: 18, max: 18, score: 5 },
//       { min: 19, max: 19, score: 6 },
//       { min: 20, max: 20, score: 7 },
//       { min: 21, max: 21, score: 8 },
//       { min: 22, max: 22, score: 9 }, 
//       { min: 23, max: 30, score: 10 }
//     ] 
//   },  // Induced Vertical Break
//   { value: null, 
//     weight: 0.5,
//     average: 9, 
//     range: [
//       { min: 0, max: 3, score: 0 },
//       { min: 4, max: 7, score: 3 }, 
//       { min: 8, max: 11, score: 7 },
//       { min: 12, max: 13, score: 5 },
//       { min: 14, max: 19, score: 3 },
//       { min: 20, max: 30, score: 0 } 
//     ] 
//   },  // Horizontal Break
//   { value: null, 
//     weight: 0.15, 
//     average: 2240,
//     range: [
//       { min: 0, max: 1800, score: 0 }, 
//       { min: 1801, max: 1913, score: 1 },
//       { min: 1914, max: 2025, score: 2 },
//       { min: 2026, max: 2138, score: 3 },
//       { min: 2139, max: 2249, score: 4 },
//       { min: 2250, max: 2320, score: 5 },
//       { min: 2321, max: 2391, score: 6 },
//       { min: 2392, max: 2462, score: 7 },
//       { min: 2463, max: 2533, score: 8 },
//       { min: 2534, max: 2599, score: 9 },
//       { min: 2600, max: 2700, score: 10 }
//     ] 
//   },  // Spin Rate
//   { value: null,
//     weight: 0.75,
//     average: 6,
//     range: [
//       { min: 0, max: 5, score: 10 },
//       { min: 5.1, max: 5.5, score: 9 },
//       { min: 5.6, max: 5.8, score: 7 },
//       { min: 5.9, max: 6.3, score: 5 },
//       { min: 6.4, max: 7, score: 3 },
//       { min: 7.1, max: 10, score: 0 }
//     ] 
//   },  // Release Height
//   { value: null,
//     weight: 0.5,
//     average: 6,
//     range: [
//       { min: 0, max: 5.4, score: 0 }, 
//       { min: 5.5, max: 5.5, score: 1 }, 
//       { min: 5.6, max: 5.6, score: 2 },
//       { min: 5.7, max: 5.7, score: 3 }, 
//       { min: 5.8, max: 5.8, score: 4 }, 
//       { min: 5.9, max: 6.2, score: 5 },
//       { min: 6.3, max: 6.3, score: 6 }, 
//       { min: 6.4, max: 6.4, score: 7 }, 
//       { min: 6.5, max: 6.5, score: 8 },
//       { min: 6.6, max: 6.6, score: 9 }, 
//       { min: 6.7, max: 10, score: 10 }
//     ] 
//   },  // Extension
//   { value: null,
//     weight: 0.35,
//     average: -5.2,
//     range: [
//       { min: -10, max: -6.8, score: 10 },
//       { min: -6.8, max: -6.3, score: 8 },
//       { min: -6.2, max: -5.8, score: 5 },
//       { min: -5.7, max: -5, score: 2 },
//       { min: -4.99, max: -4.5, score: 5 },
//       { min: -4.49, max: -4, score: 8 },
//       { min: -4, max: 0, score: 10 } 
//     ]
//   }// Vertical Approach Angle
// ];

function calculatePitchGrade(velocity, inducedVerticalBreak, horizontalBreak, spinRate, releaseHeight, extension, verticalApproachAngle) {
  finalScores = [];
  
  // Load each value into metrics to be maped later in weightedScores
  metrics[0].value = velocity;
  metrics[1].value = inducedVerticalBreak;
  metrics[2].value = horizontalBreak;
  metrics[3].value = spinRate;
  metrics[4].value = releaseHeight;
  metrics[5].value = extension;
  metrics[6].value = verticalApproachAngle;
  

  function calculateMetricValue(value, ranges) {
    for (const range of ranges) {
      if ((value >= range.min) && (value <= range.max)) {
        return range.score;
      }
    }
    return 0; // Default score if no range matches
  }

  // Calculate the weighted score for each metric
  const weightedScores = metrics.map(metric => {
    const metricValue = calculateMetricValue(metric.value, metric.range);
    finalScores.push(metricValue);
    return metric.weight * metricValue;
  });

  // Sum up the weighted scores to get the total weighted score
  const totalWeightedScore = weightedScores.reduce((sum, score) => sum + score, 0);

  // Normalize the total weighted score to a scale of 0 to 200
  const maxPossibleScore = metrics.reduce((sum, metric) => sum + (metric.weight * metric.range.reduce((max, range) => Math.max(max, range.score), 0)), 0);
  const normalizedScore = (totalWeightedScore / maxPossibleScore) * 200;

  return Math.round(normalizedScore);
}

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/getAverages', (req, res) => {
  const pitchGrade = calculatePitchGrade(
    metrics[0].average,
    metrics[1].average,
    metrics[2].average,
    metrics[3].average,
    metrics[4].average,
    metrics[5].average,
    metrics[6].average,
  );

  // Send back the average scores    
  res.json({ finalScores });
  console.log(finalScores);
});

app.post('/gradePitch', (req, res) => {
  const pitchMetrics = req.body;

  // Assuming a sample pitch grade for demonstration
  const pitchGrade = calculatePitchGrade(
  parseFloat(pitchMetrics.velocity),
  parseFloat(pitchMetrics.inducedVerticalBreak),
  parseFloat(pitchMetrics.horizontalBreak),
  parseFloat(pitchMetrics.spinRate),
  parseFloat(pitchMetrics.releaseHeight),
  parseFloat(pitchMetrics.extension),
  parseFloat(pitchMetrics.verticalApproachAngle));

  // Send back the pitch grade
  res.json({ pitchGrade });
});

app.post('/getScores', (req, res) => {
  // Send back the finalScores array
  res.json({ finalScores });
  console.log(finalScores);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
