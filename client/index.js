import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import store from './store'
import App from './components/App'


document.addEventListener('DOMContentLoaded', () => {
  render()
})

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}
