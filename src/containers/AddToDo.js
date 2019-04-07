import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Header, ToDoInput } from '../components'

import VisibleTodos from './VisibleTodos'

class AddToDo extends Component {
  state = {
    text: ''
  }

  addToDo = (text) => {
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          style={{ flex: 1 }}
          headerText="MY DAY TO-DO"
        />
        <View
          style={{ flex: 10 }}
        >
          <VisibleTodos />
        </View>
        <ToDoInput
          style={{ flex: 1 }}
          text={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          placeholder="My new to-do"
          onInputPress={() => this.addToDo(this.state.text)}
        />
      </View>
    )
  }
}


export default connect()(AddToDo)
