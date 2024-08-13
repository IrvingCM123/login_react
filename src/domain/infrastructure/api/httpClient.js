import axios from 'axios';

// Crear una instancia de axios con la URL base del API a consumir
const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
});

// Agregar un interceptor para enviar el token en las peticiones HTTP
httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  // Si hay un token, agregarlo a los headers de la petición
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default httpClient;
