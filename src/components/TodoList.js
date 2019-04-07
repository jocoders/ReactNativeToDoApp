import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TodoList = ({ todos, toggleTodo }) => {
  const { container, subContainer, toDoContainer } = styles
  return (
    <View style={container}>
      {todos.map((todo) => 
        <View 
          key={todo.id}
          style={subContainer}
        >
          <TouchableOpacity
            onPress={() => toggleTodo(todo.id)}
            style={toDoContainer}
          >
            <Ionicons
              name="ios-checkmark"
              style={{paddingRight: 5}}
              size={40}
            />
            <Text style={{
              fontSize: 24,
              textDecorationLine: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Ionicons
                size={24}
                name="ios-close-circle-outline"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toDoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default TodoList
