import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

export const addTransaction = async (data) => {
    try {
        const response = await axios.post('/transactions', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTransaction = async (id) => {
    try {
        const response = await axios.delete(`/transactions/${id}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};