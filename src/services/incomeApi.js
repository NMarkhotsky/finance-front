import axios from 'axios';
import { BASE_URL } from '../constants';

axios.defaults.baseURL = BASE_URL;

export const getIncome = async () => {
  try {
    const { data } = await axios.get('/transactions/income');
    return data.transactions;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeMonth = async () => {
  try {
    const response = await axios.get('/transactions/income/month');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeSummary = async () => {
  try {
    const { data } = await axios.get('/transactions/income/summary');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeCategory = async period => {
  const periodParams = period
    ? `?year=${period.year}&month=${period.month}`
    : '';

  try {
    const response = await axios.get(
      '/transactions/income/category' + periodParams
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeDescription = async ({ category }, period) => {
  const periodParams = period
    ? `&year=${period.year}&month=${period.month}`
    : '';

  try {
    const { data } = await axios.get(
      `/transactions/income/description?category=${category}` + periodParams
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
