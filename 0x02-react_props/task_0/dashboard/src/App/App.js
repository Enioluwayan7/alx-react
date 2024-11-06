import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import { Notifications } from './Notifications';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
       <Notifications /> {/*Add Notifications component above div.App */}
        <div className="App">
            <Header /> {/*Replace header code with Header component */}
            <body className="App-body">
                <Login /> {/*Replace Login code with Login component */} 
            </body>
            <footer className="App-footer">
                <Footer /> {/*Replace Footer code with Footer Component */}
            </footer>
        </div> 
    </> 
  );
}

export default App;
