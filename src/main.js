import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import TodoApp from './components/TodoApp.jsx';

import store from './store';

import './assets/main.css';
import 'normalize.css';

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/(:filter)" component={TodoApp} />
      </Router>
    </Provider>,
    document.getElementById('root'),
);
