import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// == Redux ==
import { store } from 'redux/store';
import { persistor } from 'redux/store';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
        <ToastContainer autoClose={2500} theme="dark" />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  //  </React.StrictMode>
);
