import React from 'react';
import React from './Login.css'
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';

function Login() {
    return (
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
    );
}
