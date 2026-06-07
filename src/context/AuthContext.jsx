import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo).result : null;
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      if (token) {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        if (isExpired) {
          console.log('🔴 Token expired. Logging out.');
          logout();
        }
      }
    }
  }, []);

  const login = (userData) => {
    const token = userData.token || userData.accessToken;
    if (token) {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();
      if (isExpired) {
        logout();
        return;
      }
    }

    const userProfile = userData.user || userData.result || {};
    const newUserInfo = {
      token,
      result: userProfile
    };

    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    setUser(userProfile);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
