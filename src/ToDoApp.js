import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddToDo from './containers/AddToDo'

export default class ToDoApp extends Component<Props> {
  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
