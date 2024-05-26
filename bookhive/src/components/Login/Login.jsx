import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './assets/Logo.jpg';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login logic goes here');

    navigate('/home');
  };

  return (
    <div className="login-container">
      <img className='Logo' src={logo} alt='logo'></img>
      <h1 className='heading'>Welcome to BookHive</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder='Username:' required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder='Password:' required />
        <br />
        <button type="submit" onClick={() => navigate('/home')}>Login</button>
        <button type="button" onClick={() => navigate('/register')}>Register</button>
      </form>
    </div>
  );
};

export default Login;