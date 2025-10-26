import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // IMPORTANTE
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* O Router DEVE estar sempre aqui. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
