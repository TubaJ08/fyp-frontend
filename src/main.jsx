import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ Import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="468831201966-pgdrjp4pfi5r1kmo9tbnk43nf02a0a6g.apps.googleusercontent.com"> {/* ✅ Wrap everything */}
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);