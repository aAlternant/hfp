import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts';
import '@djthoms/pretty-checkbox';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
