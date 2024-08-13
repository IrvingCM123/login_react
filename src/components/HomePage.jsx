// components/HomePage.jsx
import React, { useState, useEffect } from 'react';

// Se importan los componentes de Material-UI para ser utilizados en la vista
import { Card, CardContent, Typography, CardMedia, Container, CircularProgress, IconButton, Grid } from '@mui/material';

// Se importan las funciones de obtenerUsuario y logout del servicio de autenticación
import { obtenerUsuario, logout } from '../domain/services/auth.Service';

// Se importa el ícono de logout de Material-UI
import LogoutIcon from '@mui/icons-material/Logout';

import './Home.css';

const HomePage = () => {

  // Se inicializan los estados de data, loading y error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se obtienen los datos del usuario autenticado al cargar la vista
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await obtenerUsuario();
        setData(userData);
      } catch (err) {
        setError('No se pudo obtener los datos del usuario');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para cerrar sesión en el sistema
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      setError('No se pudo cerrar sesión');
    }
  };

  // Se renderiza la vista con los datos del usuario autenticado
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No se encontraron datos.</div>;
  }

  return (
    // Se renderiza la vista con los datos del usuario autenticado
    <Container
      maxWidth="lg"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%', padding: '5%' }}
    >
      <Card style={{ maxWidth: 800, padding: 20 }}>
        <CardMedia
          component="img"
          alt={`${data.firstName} ${data.lastName}`}
          height="200"
          image={data.image}
          style={{
            borderRadius: '50%',
            border: '2px solid black',
            margin: 'auto',
            maxWidth: '50%',
          }}
        />
        <CardContent>
        <IconButton
          className= 'logo'
          onClick={handleLogout}
          aria-label="Logout"
        >
          <LogoutIcon />
        </IconButton>
          <Typography variant="h4" component="div" gutterBottom>
            {data.firstName} {data.lastName}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Email:</strong> {data.email}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Phone:</strong> {data.phone}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Address:</strong> {data.address.address}, {data.address.city}, {data.address.state} {data.address.postalCode}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Birth Date:</strong> {data.birthDate}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Gender:</strong> {data.gender}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Age:</strong> {data.age}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Company:</strong> {data.company.name}, {data.company.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Crypto Wallet:</strong> {data.crypto.wallet} ({data.crypto.coin})
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>SSN:</strong> {data.ssn}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>University:</strong> {data.university}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Role:</strong> {data.role}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Eye Color:</strong> {data.eyeColor}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            <strong>Hair:</strong> {data.hair.color} ({data.hair.type})
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomePage;
