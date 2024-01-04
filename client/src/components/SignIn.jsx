import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signin', {
        username: username,
        password: password,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error during signin:', error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2 className="header">Sign In</h2>
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
      <button onClick={handleSignIn} className="button">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
