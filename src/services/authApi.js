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

axios.interceptors.response.use(
  response => response,
  async error => {
    const prevRequest = error

    if (prevRequest.config.url.includes('current') && prevRequest.response?.status === 401 && !prevRequest.sent) {
      prevRequest.sent = true
      try {
        const response = await axios.post('auth/refresh', {}, { withCredentials: true });

        if (response) {
          authHeader.set(response.data.token)
          prevRequest.config.headers.Authorization = `Bearer ${response.data.token}`
          prevRequest.config.url = 'https://finance-backend-eight.vercel.app/api/auth/current'
          return axios.get('/current')
        }
        
      } catch (refreshError) {

        return refreshError
      }
    }
    return prevRequest
  })

export const registerUser = async (credentials) => {
  const { data } = await axios.post('auth/register', credentials);

  authHeader.set(data.token);

  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post('auth/login', credentials);

  authHeader.set(data.token);

  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post('auth/logout');
  authHeader.unset();

  return data;
};

export const fetchUserByToken = async (persistedToken) => {
  authHeader.set(persistedToken);

  const { data } = await axios.get('/current');

  return data

}

export const refreshToken = async () => {
  const { data: { token } } = await axios({
    method: 'post',
    url: 'auth/refresh',
    withCredentials: true,
  });
  return token
}

