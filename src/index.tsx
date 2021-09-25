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

// https://github.com/mozilla-mobile/firefox-ios/issues/5772
type SetEnabledFn = {
  (_: boolean): void;
};

declare global {
  interface Window {
    __firefox__?: {
      NightMode: {
        setEnabled: SetEnabledFn
      }
    }
  }
}

if (window.__firefox__) {
  window.__firefox__.NightMode.setEnabled(false);
}

const hiDeveloper = () => {
  // https://github.com/sindresorhus/devtools-detect/blob/main/index.js
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;

  if (widthThreshold || heightThreshold) {
    console.log("👋 Looking around? It's here: https://kata.lunatic.cat");
    window.removeEventListener('resize', hiDeveloper);
  }
};

window.addEventListener('resize', hiDeveloper);
