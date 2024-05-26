import Login from './components/Login/Login';
import Header from './components/Login/Header';
import Register from './components/Register/Register'
import './App.css';
import Navbar from './components/Navigation/Navbar.jsx'
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import './index.css';
import Request from './Pages/Request.jsx'
import List from './Pages/List.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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