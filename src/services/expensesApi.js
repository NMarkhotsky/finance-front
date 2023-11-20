import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

export const getExpenses = async () => {
    try {
        const { data } = await axios.get('/transactions/expenses');

        return data.transactions;
    } catch (error) {
        console.log(error);
    }
};

export const getExpensesMonth = async () => {
    try {
        const response = await axios.get('/transactions/expenses/month');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getExpensesSummary = async () => {
    try {
        const { data } = await axios.get('/transactions/expenses/summary');
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getExpensesCategory = async () => {
    try {
        const response = await axios.get('/transactions/expenses/category');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getExpensesDescription = async ({category}) => {
    try {
        const {data} = await axios.get(`/transactions/expenses/description?category=${category}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};