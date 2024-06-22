// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './SocketContext';
import './style.css'; // Correct the path based on the actual location of styles.css

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
