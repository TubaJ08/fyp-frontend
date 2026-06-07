import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import AuthLayout from './AuthLayout';
import GoogleLoginButton from '../components/GoogleLoginButton'; 



const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const redirectPath = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('/auth/login', form);

      console.log('Backend Login Response:', res.data); // DEBUG: check what backend returns

      login(res.data); // Save token + user properly

      navigate(redirectPath);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };





  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold mb-6 text-center">Log In to Your Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Log In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">Or log in with</p>
        <div className="flex justify-center">
          <GoogleLoginButton /> 
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
