
import React, { useState } from 'react';
import axios from 'axios';

const SettingsPanel = ({ title, hand, pitch }) => {
  // TODO: Implement settings customization UI
  const [goal, setgoal] = useState('');
  const [min, setmin] = useState('');
  const [max, setmax] = useState('');
  const [target, settarget] = useState('');

  const handleOptionChange = (event) => {
    setgoal(event.target.value);
  };

  const handleMinChange = (event) => {
    setmin(event.target.value);
  };

  const handleMaxChange = (event) => {
    setmax(event.target.value);
  };
  const handleGoalChange = (event) => {
    settarget(event.target.value);
  };

  const handleSubmitBubbles = (event) => {
    event.preventDefault();
    console.log('Form submitted with selected option:', goal);
  };

  const handleSubmit = (event) => {
    var category = 'hello';

    switch(title){
      case 'Velocity':
        category = 'velocity';
        break;
      case 'Ind. Vertical Break':
        category = 'induced_vertical_break';
        break;
      case 'Horizontal Break':
        category = 'horizontal_break';
        break;
      case 'Spin Rate':
        category = 'spin_rate';
        break;
      case 'Relative Height':
        category = 'release_height';
        break;
      case 'Extension':
        category = 'extension';
        break;
      case 'Vertical App Angle':
        category = 'vertical_approach_angle';
        break;
    }

    let pitchType = pitch.replace(/\s+/g, '_');
    let pitch_type = `${hand}_${pitchType}`;
    let ter = goal === "target" ? "target" : "edge";


    const params = {
        pitch_type: pitch_type, 
        metric: category,
        "min": Number(min), 
        "max": Number(max),
        "target": Number(target),
        "goal": ter
    };


    axios.post('http://wmill33.pythonanywhere.com/api/edit_metric', params);

    console.log(params);

  };



  const boxStyle = {
    border: '10px solid #9f0a0a',
    padding: '5px',
    borderRadius: '5px',
    marginBottom: '10px',
    display: 'inline-block', 
    width: 'fit-content',
  };

  return (
    <div style={boxStyle}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmitBubbles}>
      <div>
        <label>
          <input
            type="radio"
            value="target"
            checked={goal === 'target'}
            onChange={handleOptionChange}
          />
          Target
        </label>
        <label>
          <input
            type="radio"
            value="edge"
            checked={goal === 'edge'}
            onChange={handleOptionChange}
          />
          Edge
        </label>
      </div>
      <div>
        
        <input
          type="text"
          placeholder="Min"
          value={min}
          onChange={handleMinChange}
        />
        
        
      </div>
      <div>
        <input
          type="text"
          placeholder="Max"
          value={max}
          onChange={handleMaxChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="goal"
          value={target}
          onChange={handleGoalChange}
        />
      </div>
      <button className='button'type="submit" onClick={handleSubmit}>Submit</button></form>
    </div>
  );
};

export default SettingsPanel;
