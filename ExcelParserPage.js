import React, { Component } from 'react';
import * as XLSX from 'xlsx';

class ExcelParserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parsedData: [],
        };
    }

    handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                // Assuming your Excel sheet is the first one (index 0)
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                // Define the column names you want to extract
                const columnNames = [
                    'Pitcher',
                    'PitcherThrows',
                    'TaggedPitchType',
                    'EffectiveVelo',
                    'InducedVertBreak',
                    'HorzBreak',
                    'SpinRate',
                    'RelHeight',
                    'Extension',
                    'VertApprAngle',
                ];

                const parsedData = XLSX.utils.sheet_to_json(worksheet, {
                    header: 1,
                });

                // Find the indices of the desired columns
                const columnIndices = columnNames.map((columnName) =>
                    parsedData[0].indexOf(columnName)
                );

                // Extract the values from the desired columns
                const extractedData = parsedData
                    .slice(1) // Skip the header row
                    .map((row) =>
                        columnIndices.map((columnIndex) => row[columnIndex])
                    );

                this.setState({ parsedData: extractedData });
                this.props.onDataParsed(extractedData); // Pass the parsed data to the parent component
            };

            reader.readAsArrayBuffer(file);
        }
    };

    render() {
        const { parsedData } = this.state;

        return (
            <div>
                <h1>Excel File Parser</h1>
                <input type="file" accept=".xlsx" onChange={this.handleFileUpload} />

                {parsedData.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Pitcher</th>
                                <th>Pitcher Throws</th>
                                <th>Tagged Pitch Type</th>
                                <th>Effective Velocity</th>
                                <th>Induced Vertical Break</th>
                                <th>Horizontal Break</th>
                                <th>Spin Rate</th>
                                <th>Release Height</th>
                                <th>Extension</th>
                                <th>Vertical Approach Angle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parsedData.map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, columnIndex) => (
                                        <td key={columnIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default ExcelParserPage;
