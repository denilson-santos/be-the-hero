import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.20.151.238:3333'
});

export default api;