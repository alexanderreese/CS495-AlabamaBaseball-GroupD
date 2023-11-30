import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDFGraphsPage from './PDFGraphsPage';


const ExportPDF = () => {
  const location = useLocation();
  const [groupedData, setGroupedData] = React.useState({});

  useEffect(() => {
    if (!location.state?.tableData) return;
  
    // Creating a new copy of tableData
    const tableDataCopy = location.state.tableData.map(row => [...row]);
  
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
