import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

export const getBalance = async () => {
  try {
    const { data } = await axios.get('/transactions/balance');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addBalance = async start_balance => {
  try {
    const {
      data: { user },
    } = await axios.post('/transactions/balance', { start_balance });
    return user;
  } catch (error) {
    console.log(error);
  }
};
