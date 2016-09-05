import React from 'react';
import {render} from 'react-dom';

// from reduxstomers
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill';

// =======================================
// Import Components 
// =======================================
import App from './components/App.js';
import LandingPage from './components/LandingPage'
import MonthlyTemperatures from './components/MonthlyTemperatures'
import PhysicalStats from './components/PhysicalStats'

// =======================================
// Import our data store 
// =======================================
import store, { history } from './store';

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="/MonthlyTemperatures" component={MonthlyTemperatures}></Route>
        <Route path="/PhysicalStats" component={PhysicalStats}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


// render(
//   <MonthlyTemperatures url="data/h1bs.csv" />,
//   document.querySelectorAll('.h1bgraph')[0]
// );
