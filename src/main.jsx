import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import { Loader } from './shared/components/Loader/Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/finance-front">
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
        <React.Suspense fallback={<Loader />}>
            <App />
          </React.Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
