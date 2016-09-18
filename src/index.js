// main entry file
import './css/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'

import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter)
const target = document.getElementById('application')

const render = () => ReactDOM.render(
  <App
    state={store.getState()}
    incrementLike={() => store.dispatch({ type: 'INCREMENT' })}
    decrementLike={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  target
)

render()
store.subscribe(render)
