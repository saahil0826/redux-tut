import { BUY_CAKE } from "./cakeType.js";
import { RETURN_CAKE } from "./cakeType.js";

const initialState = {
  numOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload
      }
    case RETURN_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      };

    default:
      return state;
  }
};

export default cakeReducer;
