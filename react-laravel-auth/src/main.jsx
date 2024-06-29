import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import AuthContext from './components/context/AuthContext.jsx';

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem('ACCESS_TOKEN') || '');

  useEffect(() => {
    localStorage.setItem('ACCESS_TOKEN', token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
