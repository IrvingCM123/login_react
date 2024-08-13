// routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import LoginForm from '../components/Login/Login';
import AuthGuard from '../guards/AuthGuard';
import HomePage from '../components/HomePage';

// Se hace uso de las rutas de la aplicación para renderizar la vista con la protección de AuthGuard 
const AppRoutes = () => (
  <Router>
    <AuthGuard>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </AuthGuard>
  </Router>
);

export default AppRoutes;
