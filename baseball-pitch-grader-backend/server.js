const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Use the express.json() middleware to parse JSON

function calculate4SFastballGrade(velocity, inducedVerticalBreak, horizontalBreak, spinRate, releaseHeight, extension, verticalApproachAngle) {
  const finalScores = [];
  // Define the weight and range for each metric
  const metrics = [
    { value: velocity, 
      weight: 1.75, 
      average: 90,
      range: [
        { min: 0, max: 89, score: 0 }, 
        { min: 90, max: 99, score: 5 }, 
        { min: 100, max: Infinity, score: 10 }
      ] 
    },  // Velocity
    { value: inducedVerticalBreak, 
      weight: 1, 
      average: 18,
      range: [
        { min: 0, max: 13, score: 0 }, 
        { min: 14, max: 22, score: 5 }, 
        { min: 23, max: Infinity, score: 10 }
      ] 
    },  // Induced Vertical Break
    { value: horizontalBreak, 
      weight: 0.5,
      average: 9, 
      range: [
        { min: 4, max: 7, score: 3 }, 
        { min: 14, max: 19, score: 3 }, 
        { min: 12, max: 13, score: 5 }, 
        { min: 8, max: 11, score: 7 }
      ] 
    },  // Horizontal Break
    { value: spinRate, 
      weight: 0.15, 
      average: 2240,
      range: [
        { min: 0, max: 2249, score: 0 }, 
        { min: 2250, max: 2599, score: 5 }, 
        { min: 2600, max: Infinity, score: 10 }
      ] 
    },  // Spin Rate
    { value: releaseHeight,
      weight: 0.75,
      average: 6,
      range: [
        { min: 6.4, max: 7, score: 3 }, 
        { min: 5.9, max: 6.3, score: 5 }, 
        { min: 5.5, max: 5.8, score: 7 }, 
        { min: 5, max: 5.5, score: 9 }, 
        { max: 5, score: 10 }
      ] 
    },  // Release Height
    { value: extension,
      weight: 0.5,
      average: 6,
      range: [
        { max: 5.4, score: 0 }, { value: 5.5, score: 1 }, { value: 5.6, score: 2 },
        { value: 5.7, score: 3 }, { value: 5.8, score: 4 }, { min: 5.9, max: 6.2, score: 5 },
        { value: 6.3, score: 6 }, { value: 6.4, score: 7 }, { value: 6.5, score: 8 },
        { value: 6.6, score: 9 }, { min: 6.7, score: 10 }
      ] 
    },  // Extension
    { value: verticalApproachAngle,
      weight: 0.35,
      average: -5.2,
      range: [
        { min: -5.7, max: -5, score: 2 },
        { min: -4.99, max: -4.5, score: 5 },
        { min: -6.2, max: -5.8, score: 5 },
        { min: -4.49, max: -4, score: 8 },
        { min: -6.8, max: -6.3, score: 8 },
        { max: -4, score: 10 },
        { min: -6.8, score: 10 }
      ]
    }// Vertical Approach Angle
  ];

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
    console.log(metric.weight + ' : ' + metricValue);
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

app.post('/gradePitch', (req, res) => {
  const pitchMetrics = req.body;
  finalScores = [];

  // Assuming a sample pitch grade for demonstration
  const pitchGrade = calculate4SFastballGrade(
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
