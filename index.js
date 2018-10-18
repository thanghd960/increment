/** @format */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducer from './reducers';
import CounterContainer from './containers/CounterContainer';

// Redux saga
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

import rootSaga from './sagas/rootSaga';
let store = createStore(allReducer, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);