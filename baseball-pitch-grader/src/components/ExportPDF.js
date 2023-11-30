import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDFGraphsPage from './PDFGraphsPage';
import axios from 'axios';


const ExportPDF = () => {
  const location = useLocation();
  const [groupedData, setGroupedData] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (!location.state?.tableData) return;
    
      // Creating a new copy of tableData
      const tableDataCopy = location.state.tableData.map(row => [...row]);
    
      // Group data by the first two columns
      const grouped = await groupByColumns(tableDataCopy);
      setGroupedData(grouped);
    };

    fetchData();
  }, [location.state?.tableData]); // Dependency array includes tableData from location.state
  

  // Function to group the table data by the first two columns
  const groupByColumns = async (data) => {
    const groups = {};
    for (const row of data) {
      // Create a unique key for the group from the first two columns
      const groupKey = `${row[0]}_${row[1]}`;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
        try {
          // Determine the handedness and pitch type
          let handedness = row[2] === "Right" ? "RH" : "LH";
          let pitchType = row[1].replace(/\s+/g, '_'); // Replace spaces with underscores
          // Construct the pitch_type variable
          let pitch_type = `${handedness}_${pitchType}`;
          const response = await axios.get('http://wmill33.pythonanywhere.com/api/get_avgs/'+pitch_type);
          let avgRow = row;
          avgRow[3] = response.result.velocity;
          avgRow[4] = response.result.ivBreak;
          avgRow[5] = response.result.hBreak;
          avgRow[6] = response.result.spinRate;
          avgRow[7] = response.result.relHeight;
          avgRow[8] = response.result.extension;
          avgRow[9] = response.result.vAppAngle;
  
          groups[groupKey].push(avgRow);
        } catch (error) {
          console.error('API call failed:', error);
        }
      }
      // Push the entire row (or the part you want to include) to the corresponding group
      groups[groupKey].push(row);
    }
    return groups;
  };

  const printDocument = async () => {
    const doc = new jsPDF();
    const graphContainers = document.querySelectorAll('[id^="graph-container-"]');

    for (let i = 0; i < graphContainers.length; i++) {
      const canvas = await html2canvas(graphContainers[i]);
      const imgData = canvas.toDataURL('image/png');

      if (i > 0) {
        doc.addPage();
      }
      doc.addImage(imgData, 'PNG', 10, 10, 190, 280); // Adjust dimensions as needed
    }

    doc.save('graphs.pdf');
  };

  return (
    <div>
      <button onClick={printDocument}>Download PDF</button>
      <div id="divToPrint" style={{ width: '210mm', height: '297mm' }}>
        <PDFGraphsPage gData={groupedData}/>
      </div>
    </div>
  );
};

export default ExportPDF;
