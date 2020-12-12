import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions.js";
import {returnCake} from '../redux/cake/cakeActions.js'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.returnCake}>Return Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    returnCake: () => dispatch(returnCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
