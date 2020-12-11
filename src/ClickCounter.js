import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  handleCounter = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.num
    }));
  };

  abc = () => {
    this.setState(
      {
        counter: this.state.counter + this.props.othernum
      },
      () => console.log(this.state.counter)
    );
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.handleCounter}>
          Click to add {this.props.num}
        </button>
        <button onClick={this.abc}>Click to add {this.props.othernum}</button>
      </div>
    );
  }
}

export default ClickCounter;
