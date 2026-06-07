import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import AuthLayout from './AuthLayout';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceArea: '',
    accountType: '',
    password: '',
    termsAgreed: false,
    subscribe: false,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) return;
    setError('');

    try {
      // Use only the fields your backend expects
      const payload = {
    name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        serviceArea: formData.serviceArea,
        accountType: formData.accountType,
        subscribe: formData.subscribe,
      };

      await api.post('/auth/signup', payload);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
        <p className="text-sm text-center text-gray-500">Join thousands of satisfied customers today</p>

        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <div className="flex gap-3">
          <select
            name="serviceArea"
            value={formData.serviceArea}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded text-gray-500"
            required
          >
            <option value="">Select area</option>
            {/* Add real options here */}
            <option value="Johartown">Johar Town</option>
            <option value="Wapdatown">Wapda Town</option>
            <option value="DHA">DHA Phase V</option>
            <option value="AskariX">Askari X</option>
            <option value="Bahriatown">Bahria Town</option>
          </select>

          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-1/2 px-4 py-2 border rounded text-gray-500"
            required
          >
            <option value="">Select type</option>
            {/* Add real options here */}
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>

        <input
          type="password"
          name="password"
          placeholder="Create a secure password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
          />
          <label className="text-sm">
            I agree to the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
          </label>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <label className="text-sm">I would like to receive updates about services and special offers</label>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          disabled={!formData.termsAgreed}
        >
          Create Account
        </button>

        <div className="text-center text-sm text-gray-500 mt-2">Or sign up with</div>

        <button
          type="button"
          className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Google
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account? <a href="/login" className="text-blue-600 underline">Sign in here</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;
