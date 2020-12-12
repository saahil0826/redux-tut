import React from 'react'
import './App.css'
import CakeContainer from './components/CakeContainer.js'
import HooksCakeContainer from './components/HooksCakeContainer'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import cakeReducer from './redux/cake/cakeReducer.js'
const store = createStore(cakeReducer)

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
      <CakeContainer/>
      <HooksCakeContainer />
      </div>
    </Provider>
  )
}

export default App
