import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchUserByToken,
  loginUser,
  logoutUser,
  registerUser,
} from '../../services/authApi';
// import { useAuth } from '../../hooks/useAuth/useAuth';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
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
    const token = localStorage.getItem('token');

    console.log('fetchCurrentUser-->token: ', token);

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      return await fetchUserByToken(token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
