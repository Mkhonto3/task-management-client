import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../utils/api';
import React from 'react';

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', credentials);
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={credentials.email} onChange={handleChange} />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
