import React, { Component } from 'react';
import d3 from 'd3';

class Axis extends Component {
  componentDidUpdate() {
    this.renderAxis();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    var node = this.refs.axis;
    d3.select(node).call(this.props.axis);
  }

  render() {
    return <g className={this.props.className} ref="axis" transform={this.props.translate}></g>
  }
}

export default Axis
