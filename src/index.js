import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Navbar from './components/universal/navbar';
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
