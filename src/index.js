import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context';

/* 4) In Context API, wrap you parent component with the Context Provider */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
