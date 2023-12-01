import React, { useState } from 'react';
import SettingsPanel from './SettingsPanel.js';
import axios from 'axios';

const SettingsPage = () => {
  
  const [selectedPitch, setSelectedPitch] = useState('none');
  
  const [selectedHand, setSelectedHand] = useState('none');
  
  const handlePitchChange = (event) => {
    setSelectedPitch(event.target.value);
  };
  const handleHandChange = (event) => {
    setSelectedHand(event.target.value);
  };

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
    'Splitter',
    'Sinker',
    'ChangeUp',
    'Curveball'
  ];
  const handTypes = ['RH', 'LH'];



  const onDefaultclick = (event) => {
    axios.get('http://wmill33.pythonanywhere.com/api/restore_defaults')
  }


  return (
    <div className="App">
      <div>
        <h1>
        If the metric requires a statistic to be farther away from the goal, choose edge.<br></br>
        If the metric requires a statistic to be as close as possible to the goal, choose target.
        </h1>
      </div>

      <div>
        <select
          onChange={handlePitchChange}>
        <option value="">Select...</option>
          {pitchTypes.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          onChange={handleHandChange}>
        <option value="">Select...</option>
          {handTypes.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <SettingsPanel title='Velocity' hand={selectedHand} pitch={selectedPitch}/>
        <SettingsPanel title='Ind. Vertical Break' hand={selectedHand} pitch={selectedPitch}/>
        <SettingsPanel title='Horizontal Break' hand={selectedHand} pitch={selectedPitch}/>
        <SettingsPanel title='Spin Rate' hand={selectedHand} pitch={selectedPitch}/>
        <SettingsPanel title='Relative Height' hand={selectedHand} pitch={selectedPitch}/>
        <SettingsPanel title='Extension' hand={selectedHand} pitch={selectedPitch}/>
        <SettingsPanel title='Vertical App Angle' hand={selectedHand} pitch={selectedPitch}/>
      </div>

      <div>
        <button onClick={onDefaultclick} className='button'>
          Reset to Defaults<br></br>
          Warning! This will force ALL settings to reset to the starting settings for ALL users
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
