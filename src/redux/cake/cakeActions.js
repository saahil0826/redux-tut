import { BUY_CAKE } from "./cakeType.js";
import { RETURN_CAKE } from "./cakeType.js";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const returnCake = (number = 1) => {
  return {
    type: RETURN_CAKE,
    payload: number
  }
}
