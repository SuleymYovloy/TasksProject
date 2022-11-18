import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Рабочий проект</h1>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
