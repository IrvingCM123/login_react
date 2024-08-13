import React from 'react';
import './App.css';
import { Login } from '../components/Login/Login';
import AppRoutes from '../routes/Routes';

// Usa las rutas de la aplicación para renderizar la vista
const App = () => {
  return <AppRoutes />;
};

export default App;
