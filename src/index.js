import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Reducer from './reducers'
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(Reducer)
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:filter?" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);



