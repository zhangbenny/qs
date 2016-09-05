import React, { Component } from 'react'

class Line extends Component {

  render() {
    return (
      <path className={this.props.className}
            d={this.props.d}
            fill='none'
            stroke={this.props.stroke}
            transform={this.props.translate}>
      </path>
    ) 
  }
   
}

export default Line;
