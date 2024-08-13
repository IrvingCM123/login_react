import httpClient from "../infrastructure/api/httpClient";

// Función para hacer login en el sistema con credenciales de usuario
export const login = async (credentials) => {
  try {
    const response = await httpClient.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
};
// Función para obtener los datos del usuario autenticado
export const obtenerUsuario = async () => {
  try {
    const response = await httpClient.get("/auth/me");
    return response.data;

  } catch (error) {
    console.error("Error en obtenerUsuario:", error);
    throw error;
  }
};
// Función para cerrar sesión en el sistema
export const logout = async () => {
  try {
    localStorage.removeItem("authToken");
    window.location.href = '/login';
  } catch (error) {
    console.error("Error en logout:", error);
    throw error;
  }
};