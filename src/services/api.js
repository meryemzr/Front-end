// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-end-bny2.onrender.com/api', // L'URL de ton back-end
});

export default api;
