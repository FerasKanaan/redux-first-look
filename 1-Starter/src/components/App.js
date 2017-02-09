import React, { Component } from 'react'
import { render } from 'react-dom'
import LikesCounter from './LikesCounter.js'

class App extends Component {
  render () {
    return (
      <section className="container">
        <h1>Count Some Likes</h1>
        <LikesCounter initialCount={0}/>
      </section>
    )
  }
}

render( <App />, document.getElementById('application'))
