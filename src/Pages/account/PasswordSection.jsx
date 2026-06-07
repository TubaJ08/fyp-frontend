import React, { useState } from 'react';
import api from '../../utils/api';   // ✅ use global api

const PasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async () => {
    try {
      await api.put('/account/change-password', {
        currentPassword,
        newPassword,
      });   // ✅ use global api
      setMessage('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      setMessage('Password change failed.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button onClick={handleChangePassword} className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Password
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default PasswordSection;
