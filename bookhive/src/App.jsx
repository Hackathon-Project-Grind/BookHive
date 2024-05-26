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
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/Request' element={<Request/>} />
          <Route path='/List' element={<List/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;