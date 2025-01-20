import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'https://blogpessoal-h068.onrender.com/',
});

export default baseApi;