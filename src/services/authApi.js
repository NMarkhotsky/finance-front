import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async (credentials) => {
  const { data } = await axios.post('auth/register', credentials);

  localStorage.setItem('token', data.token);

  authHeader.set(localStorage.getItem('token'));

  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post('auth/login', credentials);

  localStorage.setItem('token', data.token);

  authHeader.set(localStorage.getItem('token'));

  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post('auth/logout');
  authHeader.unset();

  localStorage.removeItem('token');

  return data;
};

export const fetchUserByToken = async (persistedToken) => {
  localStorage.setItem('token', persistedToken);

  authHeader.set(persistedToken);
  const {
    data: { user },
  } = await axios.get('/current');

  console.log('user: ', user);
  return user;
};
