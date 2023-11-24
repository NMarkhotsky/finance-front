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

// axios.interceptors.response.use(
//   response => response,
//   async error => {
//     const prevRequest = error

//     console.log(prevRequest);
//     try {
//       if (error?.response?.status == 401 && !prevRequest.sent) {
//         prevRequest.sent = true;

//         // const cookieToken = await hasTokenInCookies();

//         // if (cookieToken) {
//         const response = await axios.post('auth/refresh', {}, { withCredentials: true });
        
//         console.log(response, 'response');

//           if (response?.status == 200) {
//             authHeader.set(response.data.token);

//             return 
//           }
//         // }
        

//       }
//     } catch (refreshError) {
//       console.error('Error refreshing token:', refreshError);
//       throw refreshError;
//     }
//     return Promise.reject(error)
// })

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

  try {
    const response = await axios.get('/current', persistedToken);

    const user = response.data.user
  
    return user;
  } catch (error) {

    const { data } = await axios.post('auth/refresh', {}, { withCredentials: true });

    console.log(data, 'response');
    authHeader.set(data.token);
    const response = await axios.get('/current', data.token);

    if (response.status == 200) {
      const user = response.data.user
  
      return user;
    }
        
    throw error
  }

};

