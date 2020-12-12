import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer.js'
import iceCreamReducer from './iceCream/iceCreamReducer.js'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

export default rootReducer
