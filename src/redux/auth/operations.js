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
    // const state = thunkAPI.getState();
    // console.log('state: ', state);

    // const token = state.auth.token;
    // console.log('fetchCurrentUser-token: ', token);

    const token = localStorage.getItem('token');

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      return await fetchUserByToken(token);
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);