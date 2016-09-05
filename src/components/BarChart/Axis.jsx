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
    let { orient, d3scale } = this.props;

    var node = this.refs.axis;

    let d3axis = d3.svg.axis()
                   .scale(d3scale)
                   .oriegnt(orient)

    d3.select(node).call(d3axis);
  }

  render() {
    return <g className={this.props.className} ref="axis" transform={this.props.translate}></g>
  }
}

export default Axis
