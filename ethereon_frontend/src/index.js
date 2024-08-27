import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './index.css';

import 'primeicons/primeicons.css'; // Icons
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
