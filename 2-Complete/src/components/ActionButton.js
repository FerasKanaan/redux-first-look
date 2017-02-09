import React, { Component } from 'react'

export default class ActionButton extends Component {
  render () {
    const { text, handleClick } = this.props
    return (
      <button className="ActionButton" onClick={handleClick}>
        <span>{text}</span>
      </button>
    )
  }
}
