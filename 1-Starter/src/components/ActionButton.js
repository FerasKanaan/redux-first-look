import React, { Component } from 'react'

class ActionButton extends Component {
  render () {
    return (
      <button className="ActionButton" onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}

export default ActionButton
