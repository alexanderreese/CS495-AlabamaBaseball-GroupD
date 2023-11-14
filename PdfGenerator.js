import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Import html2canvas

const PdfGenerator = ({ graphData, generatePdf }) => {
    const [pdfGenerated, setPdfGenerated] = useState(false);

    const handleGeneratePdf = () => {
        if (graphData.length > 0) {
            // Create an HTML element to capture the line graph
            const graphElement = document.querySelector('#lineGraphContainer');

            if (graphElement) {
                html2canvas(graphElement).then((canvas) => {
                    const image = canvas.toDataURL('image/png');

                    const pdf = new jsPDF();
                    pdf.addImage(image, 'PNG', 10, 10, 90, 60); // Adjust the positioning and dimensions as needed

                    // Save the PDF (or trigger download)
                    pdf.save('line_graph.pdf');
                    setPdfGenerated(true);
                });
            }
        }
    };


    return (
        <div>
            {graphData.length > 0 && !pdfGenerated && (
                <button onClick={handleGeneratePdf}>Generate PDF</button>
            )}
            {pdfGenerated && <p>PDF generated. You can generate it once.</p>}
        </div>
    );
};

export default PdfGenerator;
