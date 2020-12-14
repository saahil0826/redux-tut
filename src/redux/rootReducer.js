import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer.js'
import iceCreamReducer from './iceCream/iceCreamReducer.js'
import userReducer from './user/userReducer.js'


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer
