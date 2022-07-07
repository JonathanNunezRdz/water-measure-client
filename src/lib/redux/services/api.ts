import axios from 'axios';

const BASE_URL = 'http://192.168.0.104:4001/api/v1';

const api = axios.create({
	baseURL: BASE_URL,
});

export default api;
