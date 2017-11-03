import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import hcardApp from './reducers';
import App from './components/App/App';

import './index.css';

let store = createStore(
  hcardApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
