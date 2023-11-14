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

///////////////////////////////////////////////////////////////////

var aspose = aspose || {};
aspose.cells = require("aspose.cells");
// Create an instance of the Workbook class 
var workbook = new aspose.cells.Workbook();
// Obtaining the reference of the first worksheet by calling the get(index) method 
var worksheet = workbook.getWorksheets().get(0);
// Adding sample values to cells by calling the putValue method 
worksheet.getCells().get("A2").putValue("Category1");
worksheet.getCells().get("A3").putValue("Category2");
worksheet.getCells().get("A4").putValue("Category3");
worksheet.getCells().get("B1").putValue("Column1");
worksheet.getCells().get("B2").putValue(4);
worksheet.getCells().get("B3").putValue(20);
worksheet.getCells().get("B4").putValue(50);
worksheet.getCells().get("C1").putValue("Column2");
worksheet.getCells().get("C2").putValue(50);
worksheet.getCells().get("C3").putValue(100);
worksheet.getCells().get("C4").putValue(150);
// Invoke the add method to add a chart to the worksheet 
var chartIndex = worksheet.getCharts().add(aspose.cells.ChartType.COLUMN, 5, 0, 15, 5);
// Access the instance of the newly added chart by calling the get(index) method  
var chart = worksheet.getCharts().get(chartIndex);
// Call the method to set chart data source as the range  "A1:C4" 
chart.setChartDataRange("A1:C4", true);
// The save method will save the file in xlsx format 
workbook.save( "./ColumnChart.xlsx", aspose.cells.SaveFormat.XLSX);




////////////////////////////////////////////////////////////////////

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
