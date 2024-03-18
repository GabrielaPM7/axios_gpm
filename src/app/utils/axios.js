import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Cambia esta URL por la de tu API
  timeout: 5000 // Opcional: tiempo de espera para las solicitudes
});

export default instance;
