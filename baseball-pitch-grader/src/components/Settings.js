//Settings.js
import React, { useState } from 'react';
import defaultMetrics from './metricsConfig';

const Settings = () => {
  const [pitchType, setPitchType] = useState(Object.keys(defaultMetrics)[0]);
  const [metrics, setMetrics] = useState(defaultMetrics[pitchType]);

  const handleSave = () => {
    // Save the updated metrics to the configuration file or a database
    // You can use local storage, server, or any other persistence mechanism
    console.log('Metrics Saved:', metrics);
  };

  const handlePitchTypeChange = (selectedPitchType) => {
    // Update metrics based on the selected pitch type
    setPitchType(selectedPitchType);
    setMetrics(defaultMetrics[selectedPitchType]);
  };

  return (
    <div>
      <h2>Metrics Settings</h2>
      <div>
      <h2>Pitch Form</h2>
      <label>
        Pitch Type:
        <select value={pitchType} onChange={(e) => handlePitchTypeChange(e.target.value)}>
          {Object.keys(defaultMetrics).map((pitch) => (
            <option key={pitch} value={pitch}>
              {pitch}
            </option>
          ))}
        </select>
      </label>
      <br />
    </div>
      <label>
      Velocity:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      <label>
      Induced Vertical Break:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      <label>
      Horizontal Break:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      <label>
      Spin Rate:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      <label>
      Release Height:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      <label>
      Extension:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      <label>
      Vertical Approach Angle:
        <input type="number" value={metrics.speed} onChange={(e) => setMetrics({ ...metrics, speed: e.target.value })} />
      </label>
      {/* Repeat for other metrics */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;