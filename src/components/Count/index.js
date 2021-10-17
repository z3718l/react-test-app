import React, { Component } from "react";
import { connect } from "react-redux";
// import CountUI from "./CountUI";
import { createIncrement } from "../../store/countAction";

class CountUI extends Component {
  add = () => {
    console.log("点击+1");
    this.props.jia(1);
  };
  render() {
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.add}>点击+1</button>
      </>
    );
  }
}

export default connect(
  (state) => ({ count: state }),
  {
    jia: createIncrement,
  }
  //   (dispatch) => ({
  //     jia: (num) => dispatch({ type: "increment", data: num }),
  //   })
)(CountUI);
