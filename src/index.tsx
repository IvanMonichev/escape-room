import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/app';
import store from './store';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createHashRouter([
  {
    path: '/*',
    element: <App />
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
