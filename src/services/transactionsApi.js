import axios from 'axios';
import { t } from 'i18next';
import { BASE_URL } from '../constants';
import { ShowToast } from '../utils';

axios.defaults.baseURL = BASE_URL;

export const addTransaction = async data => {
  try {
    const response = await axios.post('/transactions', data);
    if (response.status === 200) {
      ShowToast('success', t('toast_success_add_transaction'));
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async id => {
  try {
    const response = await axios.delete(`/transactions/${id}`);

    if (response.status === 200) {
      ShowToast('success', t('toast_success_delete_transaction'));
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTransactions = async period => {
  const periodParams = period
    ? `?year=${period.year}&month=${period.month}`
    : '';

  try {
    const { data } = await axios.get(`/transactions` + periodParams);

    return data;
  } catch (error) {
    console.log(error);
  }
};
