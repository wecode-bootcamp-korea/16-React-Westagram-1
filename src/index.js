import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import reportWebVitals from './reportWebVitals';
import './styles/reset.scss'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();