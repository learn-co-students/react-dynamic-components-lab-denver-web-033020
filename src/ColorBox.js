import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const checkValue = this.props.opacity * 100
    const newValue = this.props.opacity - 0.1
    return checkValue < 20 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newValue} />
      </div>
    )
  }

}

