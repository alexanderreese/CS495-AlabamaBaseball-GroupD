import React, { useState } from 'react';
//import './styles.css';
import axios from 'axios';
import HomePage from './components/Homepage';
import SettingsPage from './components/SettingsPage.js';
import Header from './components/Header.js'


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="App">
      
      <Header>
        <button onClick={() => handleNavigation('home')}>Home</button>
        <button onClick={() => handleNavigation('page1')}>Settings</button>
      </Header>
      <nav>

        {currentPage === 'home' && <HomePage />}
        {currentPage === 'page1' && <SettingsPage />}
      </nav>
    </div>
    </div>
  );
};

export default App;

