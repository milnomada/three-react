import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
//import { createLogger, logger } from 'redux-logger'
//import { browserHistory, Router, Route } from 'react-router';
//import { browserHistory } from 'react-router';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
//import { save, load } from "redux-localstorage-simple"

import Reducer from './reducers'
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware(
      //( save({ namespace: "musicloader" }), thunk, logger ) // Saving done here
      //save({ namespace: "musicloader" }), thunk, logger  // Saving done here
    )(createStore)

const store = createStoreWithMiddleware(
  Reducer
  //load({ namespace: "musicloader" })  
)

export { store }

render(
  <Provider store={store}>
    <Router>
      <Switch>
      {/*
        <Route path="/album/(:name)" component={App} />
        <Route path="/artist/(:name)" component={App} />
        <Route path="/(:style)" component={App} />
        <Route path="/(:filter)" component={App} />
      */}
        <Route path="/:filter?" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);



