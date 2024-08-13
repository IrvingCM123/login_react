import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import "./login.css";

// Uso de useForm para manejar formularios
import { useForm } from "react-hook-form";

// Utilizar el servicio de autenticación para hacer login
import { login } from "../../domain/services/auth.Service";

// Importanción del modelo de usuario para el login
import User from "../../domain/models/User";

// Importación de los mensajes de error
import { Erroes_Login } from "../../helpers/Login";

export const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "auto",
    backgroundColor: "#E6F4F1",
    borderRadius: "12px",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 25)",
  };
  const btnstyle = { backgroundColor: "#1B6DA1", margin: "12px 0" };

  // Uso de useForm para manejar formularios
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función para manejar el submit del formulario
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Crear un objeto de tipo User con los datos del formulario
      const user = new User(data.username, data.password);
      // Llamar a la función de login con el usuario
      const response = await login(user);
      // Mostrar la respuesta en consola
      console.log(response);
      // Almacenar el token en el local storage
      localStorage.setItem("authToken", response.token);
    // Redirigir al home
    window.location.href = '/home';
    } catch (error) {
      // Muestra el mensaje de error
      alert('Hubo un error al iniciar sesión. Por favor, intente nuevamente.');
    }
  };

  return (
    <Grid
      container
      style={{ minHeight: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Paper elevation={12} style={paperStyle}>
        <Grid align="center">
          <img src="/logo-color.png" className="image" alt="" />
          <h2>Login</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            placeholder="Enter Your Username"
            fullWidth
            required // Si solo se quiere mostrar texto pueden usar mi ejemplo de la linea de abajo
            {...register("username", { required: 'El usuario es requerido' })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ''}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            placeholder="Enter Your Password"
            type="password"
            fullWidth
            required
            {...register("password", { required: 'La contraseña es requerida' })}
          />
          <Button
            style={btnstyle}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
