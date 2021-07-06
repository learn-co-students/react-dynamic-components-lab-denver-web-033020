import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null}
         {/* if this props opacity is greater than or equl to .2 create a new colorbox with opacity lower by .1. else dont render another colorbox */}
      </div>
    )
  }

}

