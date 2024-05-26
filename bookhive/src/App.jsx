import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register } from './components';
import Home from './Pages/Home'; 

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div>


        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
