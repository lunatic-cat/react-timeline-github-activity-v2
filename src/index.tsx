import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'styled';
import { store } from 'store';

import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
