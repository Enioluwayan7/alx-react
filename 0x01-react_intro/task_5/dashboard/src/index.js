import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Notifications } from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Notifications />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root-notifications')
);
