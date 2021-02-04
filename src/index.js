import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reducer from './store/reducers/reducer';
import storeReducer from './store/reducers/storeReducer';
import thunk from 'redux-thunk';// Middleware for async code

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // redux dec tools

const rootReducers = combineReducers({
    service: reducer,
    store: storeReducer
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  // <React.StrictMode>  ??
    <Provider store={store}>
        <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
