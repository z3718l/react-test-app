import React, { Component } from 'react'

export default class CountUI extends Component {
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
