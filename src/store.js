import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

/*
  Store

  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

// =======================================
// initial state 
// =======================================
let initialData = [
  {
    A: [0.1, 0.9, 0.3],
    B: [0.8, 0.5, 0.6],
    C: [0.3, 0.5, 0.8],
    weight: [150, 180, 160],
    calIn: [1000, 1500, 1250],
    calOut: [800, 900, 1000]
  }
];


const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {areaChartData: [], barChartData: initialData}, applyMiddleware(thunk));

// we export history because we need it in `root.js` to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
