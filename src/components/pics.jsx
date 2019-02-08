import React, { Component } from "react";

class Pics extends Component {
  state = {
    imageUrl: "https://picsum.photos/80"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
}

export default Pics;
