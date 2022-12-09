import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { movieApi } from './api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={movieApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

