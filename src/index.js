import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importez vos styles CSS
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Rendez l'application dans l'élément DOM avec l'ID "root"
);
