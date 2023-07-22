import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Assuming this is your main component

// This is where the magic happens - mounting the app into the 'root' element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
