// SettingsPage.js
import React from 'react';
import Settings from './components/Settings';
import { Link } from 'react-router-dom';

function SettingsPage() {
  return (
    <div>
        <div>
            <Link to="/">Go to Main Page</Link>
        </div>
        <div className="Settings">
            <Settings/>
        </div>
    </div>
  );
}

export default SettingsPage;