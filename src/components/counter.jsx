import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = product => {
    console.log(product);
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>{" "}
        <button
          onClick={product => this.handleDecrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
