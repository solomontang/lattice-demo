import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import App from './App';

const history = createBrowserHistory();
const reduxHistory = routerMiddleware(history);

//redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, reduxHistory)
);

const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <Route path='/' component={App}/> */}
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
