import axios from "axios";
import { BASE_URL } from "../constants";

axios.defaults.baseURL = BASE_URL;

export const getIncome = async () => {
  try {
<<<<<<< HEAD
    const { data } = await axios.get("/transactions/income");
=======
    const { data } = await axios.get('/transactions/income');
>>>>>>> 57d24393f29ac4eeb3e28902b03ca8fb64de7fc0
    return data.transactions;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeMonth = async () => {
  try {
<<<<<<< HEAD
    const response = await axios.get("/transactions/income/month");
=======
    const response = await axios.get('/transactions/income/month');
>>>>>>> 57d24393f29ac4eeb3e28902b03ca8fb64de7fc0
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeSummary = async () => {
  try {
<<<<<<< HEAD
    const { data } = await axios.get("/transactions/income/summary");
=======
    const { data } = await axios.get('/transactions/income/summary');
>>>>>>> 57d24393f29ac4eeb3e28902b03ca8fb64de7fc0
    return data;
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
export const getIncomeCategory = async (period) => {
  const periodParams = period
    ? `?year=${period.year}&month=${period.month}`
    : "";

  try {
      const response = await axios.get(
        "/transactions/income/category" + periodParams
      );
      return response;
=======
export const getIncomeCategory = async period => {
  const periodParams = period
    ? `?year=${period.year}&month=${period.month}`
    : '';

  try {
    const response = await axios.get(
      '/transactions/income/category' + periodParams
    );
    return response;
>>>>>>> 57d24393f29ac4eeb3e28902b03ca8fb64de7fc0
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeDescription = async ({ category }, period) => {
  const periodParams = period
    ? `&year=${period.year}&month=${period.month}`
<<<<<<< HEAD
    : "";
=======
    : '';
>>>>>>> 57d24393f29ac4eeb3e28902b03ca8fb64de7fc0

  try {
    const { data } = await axios.get(
      `/transactions/income/description?category=${category}` + periodParams
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
