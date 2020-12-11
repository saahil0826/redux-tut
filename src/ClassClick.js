import React, { Component } from "react";

class ClassClick extends Component {
  handleClick() {
    console.log("class button happened");
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ClassClick;
