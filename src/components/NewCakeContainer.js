import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions.js";
import { returnCake } from "../redux/cake/cakeActions.js";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
    <h4>Redux with payload</h4>
      <h2>Number of cakes = {props.numOfCakes} </h2>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
      <button onClick={() => props.returnCake(number)}>Return {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};


const mapDispatchToProps = (dispatch) => ({
  buyCake: number => dispatch(buyCake(number)),
  returnCake: number => dispatch(returnCake(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
