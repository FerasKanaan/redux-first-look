import React, { Component } from 'react'
import LikesCounter from './LikesCounter.js'

export default class App extends Component {
  render () {
    const { state, incrementLike, decrementLike} = this.props
    return (
      <section className="container">
        <h1>Count Some Likes</h1>
        <LikesCounter   initialCount={state.likes}
                        handleIncrement={incrementLike}
                        handleDecrement={decrementLike}/>
      </section>
    )
  }
}
