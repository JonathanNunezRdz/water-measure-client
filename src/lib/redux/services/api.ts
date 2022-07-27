import axios from 'axios';

const BASE_URL =
	process.env.NEXT_PUBLIC_BASE_URL || 'http://192.168.1.112:4001';

const api = axios.create({
	baseURL: `${BASE_URL}/api/v1`,
});

export default api;
