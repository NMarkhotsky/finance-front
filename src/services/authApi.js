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

    console.log(prevRequest.response.status, 'prevRequest');

    if (prevRequest.request.responseURL.includes('current') && prevRequest.response?.status === 401 && !prevRequest.sent) {
      prevRequest.sent = true
      try {
        const response = await axios.post('auth/refresh', {}, { withCredentials: true });
        console.log(response, 'prevRequest.response?.status ? == 401  response');
        if (response) {
          authHeader.set(response.data.token)
          prevRequest.config.headers.Authorization = `Bearer ${response.data.token}`
        }
        return axios(prevRequest)
      } catch (refreshError) {

        
        console.log(refreshError, 'prevRequest.response?.status ? == 401  error');
        return refreshError
      }
    }
    return prevRequest
  })
//     return error
//     // try {
//     //   if (error?.response?.status == 401 && !prevRequest.sent) {
//     //     prevRequest.sent = true;

//     //     // const cookieToken = await hasTokenInCookies();

//     //     // if (cookieToken) {
//     //     const response = await axios.post('auth/refresh', {}, { withCredentials: true });
        
//     //     console.log(response, 'response');

//     //       if (response?.status == 200) {
//     //         authHeader.set(response.data.token);

//     //         return await fetchUserByToken(response.data.token)
//     //       }
//     //     // }
//     //     console.log(response, 'response from refresh');

//     //   }

//     //   return Promise.reject(error)

//     // } catch (refreshError) {
//     //   console.error('Error refreshing token:', refreshError);
//     //   throw refreshError;
//     // }

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

  const {
    data: { user },
  } = await axios.get('/current');

  return user

  // const response = await axios.get('/current').catch(async error => {
  //   console.log(error);
  //   if (error.response.status === 401) {
  //     console.log(error.response.status, 'error.response.status');
  //     const newToken = await refreshToken();
      
  //     authHeader.set(newToken)
  //     const resp = await axios.get('/current')
  //     console.log(resp, 'current user after 401');
  //     if (resp) {
  //       return resp.data.user
  //     }
  //     console.log(error);
  //   }
  // });
  // console.log(response);
  // return response.data.user; 

}
  // try {
  //   const response = await axios.get('/current', persistedToken);

  //   const user = response.data.user
  
  //   return user;
  // } catch (error) {
  
  //   console.log(error);

    // if (error.status === 401) {
    //   const newToken = await refreshToken()

    //   console.log(newToken);
    //   // if (newToken) {
    //   //   const response = await axios.get('/current', newToken);

    //   //   const user = response.data.user
  
    //   //   return user;
    //   }
    // }

    // const { data } = await axios.post('auth/refresh', { withCredentials: true });

    // console.log(data, 'response');
    // authHeader.set(data.token);
    // const response = await axios.get('/current', data.token);

    // if (response.status == 200) {
    //   const user = response.data.user
  
    //   return user;
    // }
        
    // throw error
  // }

// };

export const refreshToken = async () => {
  const { data: { token } } = await axios({
    method: 'post',
    url: 'auth/refresh',
    withCredentials: true,
  });
  return token
}

