import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from './assets/Logo.jpg';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration logic goes here');
    navigate('/login');
  };

  return (
    <div className='register-container'>
      <img className='Logo' src={logo} alt='logo'></img>
      <h1 className='heading'>Welcome to BookHive</h1>
      <h2 className='heading2'>Register to get started</h2>
      <form className='RegForm' onSubmit={handleRegister}>
        <label className='label1'>Enter Name: </label>
        <input type="text" required />
        <br />
        <label className='label2'>Enter Email: </label>
        <input type="text" required/>
        <br />
        <label className='label3'>Enter Reg Id: </label>
        <input type="text" required />
        <br />
        <label className='label4'>Enter Password: </label>
        <input type="password" required />
        <br />
        <label className='label5'>Re-Enter Password: </label>
        <input type="password" required />
        <br />
        <button className='RegBu' type="submit" onClick={() => navigate('/login')}>Register</button>
      </form>
    </div>
  );
}

export default Register;
