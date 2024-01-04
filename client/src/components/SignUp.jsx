import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username: username,
        password: password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error during signup:', error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2 className="header">Sign Up</h2>
      <label className="label">Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <br />
      <label className="label">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <br />
      <button onClick={handleSignUp} className="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
