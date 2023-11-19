import axios from "axios";
import { BASE_URL } from "../constants";
import { ShowToast } from "../utils";

axios.defaults.baseURL = BASE_URL;

export const addTransaction = async (data) => {
  try {
    const response = await axios.post("/transactions", data);
    if (response.status === 200) {
      ShowToast("success", "Created new transaction");
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const response = await axios.delete(`/transactions/${id}`);

    if (response.status === 200) {
      ShowToast("success", response.data);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTransactions = async () => {
  try {
    const { data } = await axios.get(`/transactions/`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
