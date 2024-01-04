import React, { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => handleTabToggle('signup')}
        >
          Sign Up
        </button>
        <button
          className={`tab-button ${activeTab === 'signin' ? 'active' : ''}`}
          onClick={() => handleTabToggle('signin')}
        >
          Sign In
        </button>
      </div>

      {activeTab === 'signup' && <SignUp />}
      {activeTab === 'signin' && <SignIn />}
    </div>
  );
};

export default App;
