import React, { Component } from 'react'
import LikesCounter from './LikesCounter.js'

class App extends Component {
  render () {
    const { value, incrementLike, decrementLike } = this.props
    return (
      <section className="container">
        <h1>Count Some Likes</h1>
        <LikesCounter initialCount={value} handleIncrement={incrementLike} handleDecrement={decrementLike}/>
      </section>
    )
  }
}

export default App
