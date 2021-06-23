import React from 'react'
import './App.css'
import CakeContainer from './components/CakeContainer.js'
import IceCreamContainer from './components/IceCreamContainer.js'
import HooksCakeContainer from './components/HooksCakeContainer.js'
import NewCakeContainer from './components/NewCakeContainer.js'
import UsersContainer from './components/UsersContainer.js'
// import UseReducerExample from './components/use-reducer-example.js'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import rootReducer from './redux/rootReducer.js'
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
      <CakeContainer/>
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <UsersContainer />
      </div>
    </Provider>
  )
}

export default App
