import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Store } from './App/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store= {Store}>
      <Home/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
