import React from 'react';

import './index.css'; // Importez vos styles CSS
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);