import { BUY_ICECREAM } from './iceCreamType.js'

const initialState = {
  numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfCakes: state.numOfIceCreams - 1
    }

    default: return state
  }
}

export default iceCreamReducer
