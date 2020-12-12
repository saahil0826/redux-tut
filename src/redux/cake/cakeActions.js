import { BUY_CAKE } from './cakeType.js'
import { RETURN_CAKE } from './cakeType.js'


export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}

export const returnCake = () => {
  return {
    type: RETURN_CAKE
  }
}
