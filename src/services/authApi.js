import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization;
  },
};

export const registerUser = async (credentials) => {
  const { data } = await axios.post('api/auth/register', credentials);

  authHeader.set(data.token);

  localStorage.setItem('token', data.token);

  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post('api/auth/login', credentials);

  authHeader.set(data.token);

  localStorage.setItem('token', data.token);

  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post('api/auth/logout');
  authHeader.unset();

  return data;
};
