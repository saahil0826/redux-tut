import React from "react";

const FunctionClick = ({name})=> {

  const clickHandler = () =>{
    console.log("functional button clicked");
  }
  return <button onClick={clickHandler}>Click me {name}</button>;
}

export default FunctionClick;
