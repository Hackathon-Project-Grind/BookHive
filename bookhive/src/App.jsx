import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'; // Ensure only one import for Login
import Register from './components/Register/Register';
import Navbar from './components/Navigation/Navbar';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Request from './Pages/Request';
import List from './Pages/List';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/request" element={<Request />} />
          <Route path="/list" element={<List />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;