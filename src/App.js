import React from 'react'
import './App.css'
import CakeContainer from './components/CakeContainer.js'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import cakeReducer from './redux/cake/cakeReducer.js'
const store = createStore(cakeReducer)

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
      <CakeContainer/>
      </div>
    </Provider>
  )
}

export default App
