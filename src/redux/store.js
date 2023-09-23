import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { themeReducer } from './theme/themeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
