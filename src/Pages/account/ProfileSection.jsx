import React, { useEffect, useState } from 'react';
import api from '../../utils/api';   // ✅ use global api

const ProfileSection = () => {
  const [profile, setProfile] = useState({ name: '', email: '', phone: '', address: '' });
  const [message, setMessage] = useState('');

  const fetchProfile = async () => {
    try {
      const res = await api.get('/account/profile');   // ✅ use global api
      setProfile(res.data);
    } catch (err) {
      setMessage('Failed to load profile.');
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put('/account/profile', profile);   // ✅ use global api
      setMessage('Profile updated successfully!');
    } catch (err) {
      setMessage('Failed to update profile.');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
      <div className="space-y-4">
        {['name', 'email', 'phone', 'address'].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={profile[field] || ''}
            onChange={(e) => setProfile({ ...profile, [field]: e.target.value })}
            className="w-full border p-2 rounded"
          />
        ))}
        <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Profile
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default ProfileSection;
