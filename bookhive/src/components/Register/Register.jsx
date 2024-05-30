import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from './assets/Logo.jpg';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', regId: '', password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Passwords match validation
    if (form.password !== form.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to register');
      }

      // Clear form and error message on successful registration
      setForm({ name: '', email: '', regId: '', password: '', confirmPassword: '' });
      setErrorMessage('');
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='register-container'>
      <img className='Logo' src={logo} alt='logo'></img>
      <h1 className='heading'>Welcome to BookHive</h1>
      <h2 className='heading2'>Register to get started</h2>
      <form className='RegForm' onSubmit={handleRegister}>
        <label className='label1'>Enter Name: </label>
        <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
        <br />
        <label className='label2'>Enter Email: </label>
        <input type="email" name="email" value={form.email} onChange={handleInputChange} required />
        <br />
        <label className='label3'>Enter Reg Id: </label>
        <input type="text" name="regId" value={form.regId} onChange={handleInputChange} required />
        <br />
        <label className='label4'>Enter Password: </label>
        <input type="password" name="password" value={form.password} onChange={handleInputChange} required />
        <br />
        <label className='label5'>Re-Enter Password: </label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleInputChange} required />
        <br />
        <button className='RegBu' type="submit">Register</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Register;
