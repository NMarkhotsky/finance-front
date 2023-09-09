import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { themeReducer } from './theme/themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
