// Code CoordinatesButton Component Here
import React from "react";
class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientY, e.clientX]);
  };
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default CoordinatesButton;
