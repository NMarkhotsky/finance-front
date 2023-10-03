import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

export const getBalance = async () => {
    try {
        const response = await axios.get('/transactions/balance');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addTransaction = async () => {
    try {
        const response = await axios.post('/transactions/balance');
        return response;
    } catch (error) {
        console.log(error);
    }
};