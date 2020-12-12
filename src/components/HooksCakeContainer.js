import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from "../redux/cake/cakeActions.js";


function HooksCakeContainer () {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
    <h4>Redux with hooks</h4>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
