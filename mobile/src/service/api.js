import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.11.7:3333',  //Matheus
    // baseURL: 'http://192.168.1.20:3333',  //Jecé
    baseURL: 'http://10.0.2.2:3333', // Emulador
});


export default api;