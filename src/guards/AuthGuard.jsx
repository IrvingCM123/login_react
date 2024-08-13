// guards/AuthGuard.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem('authToken');
  const location = useLocation();

  // Permitir acceso a las páginas públicas
  if (!token && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  // Redirigir a la home si ya está autenticado
  if (token && location.pathname === '/login') {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AuthGuard;
