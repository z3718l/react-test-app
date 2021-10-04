import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class LifeCyclePage extends Component {
  static defaultProps = { // 给props一个默认值
    msg: 'Om'
  }
  static propTypes = { // 给props定义类型
    // msg: PropTypes.String
  }
  constructor (props) {
    super(props)
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  render () {
    console.log('render', this.props)
    return (
      <div>
        <h3>react 生命周期</h3>
        <h3>生命周期</h3>
      </div>
    )
  }
}
