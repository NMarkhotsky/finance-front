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

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/fetchCurrentUser',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();

//     const token = state.auth.token;
//     console.log('fetchCurrentUser-token: ', token);

//     const token2 = localStorage.getItem('token');
//     // localStorage.setItem('token', token);

//     if (token === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       return await fetchUserByToken(token2);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.response.data.message);
//     }
//   }
// );

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log('state: ', state);

    const token = state.auth.token;
    console.log('fetchCurrentUser-token: ', token);

    const token2 = localStorage.getItem('token');

    if (token2 === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      return await fetchUserByToken(token2);
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
