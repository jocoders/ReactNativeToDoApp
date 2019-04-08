import React from 'react'
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const { container, subContainer, toDoContainer } = styles
  const separator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE'
        }}
      />
    )
  }
  console.log('todos', todos)
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      itemSeparatorComponent={separator}
      renderItem={({ item }) => (
        <View 
          key={item.id}
          style={container}
        >
          <View style={{ flex: 1 }}>
            <Ionicons
              name="ios-checkmark"
              style={{ paddingLeft: 10, color: '#0099ff' }}
              size={40}
            />
          </View>
          <View style={{ flex: 8 }}>
            <TouchableOpacity
              onPress={() => toggleTodo(item.id)}
              style={subContainer}
            >
              <Text style={{
                fontSize: 24,
                textDecorationLine: item.completed ? 'line-through' : 'none' }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => deleteTodo(item.id)}
            >
              <Ionicons
                size={24}
                name="ios-close-circle-outline"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#ffa500'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { TodoList }
