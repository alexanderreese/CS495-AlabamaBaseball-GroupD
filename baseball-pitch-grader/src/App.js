import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;