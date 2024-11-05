import React from 'react';
import './App'
import './Footer.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
    return (
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    )
}

export default Footer;
