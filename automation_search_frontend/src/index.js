import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import Registration from './Pages/registration';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();