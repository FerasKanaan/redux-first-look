import React, { Component } from 'react'
import ActionButton from './ActionButton.js'

class LikesCounter extends Component {
  render () {
    const { initialCount, handleIncrement, handleDecrement } = this.props
    return (
      <div className="LikesCounter">
        <h3>Likes: {initialCount}</h3>
        <div className="ActionButtons">
          <ActionButton text="Like! (+1)" handleClick={handleIncrement} />
          <ActionButton text="Dislike! (-1)" handleClick={handleDecrement} />
        </div>
      </div>
    )
  }
}

export default LikesCounter
