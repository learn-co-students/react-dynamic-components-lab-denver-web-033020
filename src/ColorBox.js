import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
      const newOpactity = this.props.opacity >= 0.2 
        ? this.props.opacity - 0.1
        : null

      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          { newOpactity != null ? ( <ColorBox opacity={newOpactity} />): null }
        </div>
      )
  }

}

