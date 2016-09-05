import React, { Component } from 'react'

class Line extends Component {

  render() {
    return (
      <path className={this.props.className}
            d={this.props.d}
            stroke={this.props.stroke}
            fill={this.props.fill}
            transform={this.props.translate}>
      </path>
    ) 
  }
   
}

export default Line;
