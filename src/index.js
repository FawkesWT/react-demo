import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducers from './redux/reducers'
// import getRouter from './router'

// 可以加入 不同的middleware
const middleware = [ thunk ]
let store = createStore(appReducers,applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
