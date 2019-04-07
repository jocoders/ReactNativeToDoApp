import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ToDoApp from './ToDoApp'
import store from './store'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    )
  }
}
