import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchUserByToken,
  loginUser,
  logoutUser,
  registerUser,
  // refreshToken
} from '../../services/authApi';
import { addBalance } from '../../services/balanceApi';
import { ShowToast } from '../../utils';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
      ShowToast("error", error.response.data.message)
      return rejectWithValue(error);
    }
  }
);

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      return await registerUser(credentials);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logoutUser();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      
      const response = await fetchUserByToken(persistedToken);
      console.log(response, 'response');
      if (response.user) {
        return response
      } else {
        console.log(response);
        return thunkAPI.rejectWithValue(response);
      } 

    } catch (e) {
      console.log(e);
      
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);


export const addStartBalance = createAsyncThunk(
  'auth/addStartBalance',
  async (startBalance, { rejectWithValue }) => {
    try {
      const { balance }  = await addBalance(startBalance);   
      return balance

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
