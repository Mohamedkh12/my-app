import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importez vos styles CSS
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);