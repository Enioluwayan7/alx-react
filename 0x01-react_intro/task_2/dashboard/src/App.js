import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        
        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* OK button */}
        <button type="button">OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;
