import React, { useState } from 'react';
import axios from 'axios';

const pitchTypes = [
  '4S Fastball',
  '2S Fastball',
  'SI Fastball',
  'CT Fastball',
  'Cutter',
  'Gyro Slider',
  'Slider',
  'Slutter',
  'Sweeper',
  'Slurve',
  '12/6',
  'Traditional CH',
  'Sidespin SH',
  'Splitter'
];

const handOptions = ['RH', 'LH'];  // Hand options

const PitchInputForm = () => {
  const [metrics, setMetrics] = useState({
    pitchType: '',
    hand: '',
    velocity: '',
    inducedVerticalBreak: '',
    horizontalBreak: '',
    spinRate: '',
    releaseHeight: '',
    extension: '',
    verticalApproachAngle: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMetrics({
      ...metrics,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle form submission (e.g., send metrics to the server for grading)
    console.log('Form submitted with metrics:', metrics);
    try {
      const response = await axios.post('http://localhost:5000/gradePitch', metrics);
      console.log('PitchGrade: ' + response.data.pitchGrade);
    } catch (error) {
      console.error('Error calculating pitch grade:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pitch-input-form">
      <div className="form-group">
        <label>
          Pitch Type:
          <select name="pitchType" value={metrics.pitchType} onChange={handleInputChange} className="form-control">
            <option value="">Select Pitch Type</option>
            {pitchTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Hand:
          <select name="hand" value={metrics.hand} onChange={handleInputChange} className="form-control">
            <option value="">Select Hand</option>
            {handOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Velocity:
          <input type="number" name="velocity" value={metrics.velocity} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Induced Vertical Break:
          <input type="number" name="inducedVerticalBreak" value={metrics.inducedVerticalBreak} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Horizontal Break:
          <input type="number" name="horizontalBreak" value={metrics.horizontalBreak} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Spin Rate:
          <input type="number" name="spinRate" value={metrics.spinRate} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Release Height:
          <input type="number" name="releaseHeight" value={metrics.releaseHeight} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Extension:
          <input type="number" name="extension" value={metrics.extension} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Vertical Approach Angle:
          <input type="number" name="verticalApproachAngle" value={metrics.verticalApproachAngle} onChange={handleInputChange} className="form-control" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Grade Pitch</button>
    </form>
  );
};

export default PitchInputForm;
