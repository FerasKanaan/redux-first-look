import React, { Component } from 'react'
import { render } from 'react-dom'
import LikesCounter from './LikesCounter.js'
import ShadowDOM from 'react-shadow';
import './css/styles.css'

class App extends Component {
  render () {
    return (
     
      <section >
        <h1>TokenFlow Some Likes</h1>
        <LikesCounter initialCount={0}/>
        <LikesCounter initialCount={0}/>
      </section>
      
    )
  }
}
export default App
//render( <App />, document.getElementById('application'))
