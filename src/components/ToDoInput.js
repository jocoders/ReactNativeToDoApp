import React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ToDoInput = (props) => {
  const { container, textInput, subContainer, textStyle } = styles
  return (
    <View style={container}>
      <TextInput
        value={props.text}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={textInput}
      />
      <TouchableOpacity
        onPress={props.onInputPress}
      >
        <View style={subContainer}>
          <Text style={textStyle}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //bottom: 0,
    //position: 'absolute'
  },
  subContainer: {
    height: 80,
    width: 50,
    backgroundColor: '#ff336b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput: {
    paddingLeft: 20,
    fontSize: 20,
    flex: 1,
    height: 80,
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea'
  }
})

export { ToDoInput }
