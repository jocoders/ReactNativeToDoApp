import React from 'react'
import { View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ToDoInput = (props) => {
  const { container, textInput, subContainer, textStyle } = styles
  return (
    <KeyboardAvoidingView 
      style={container}
      behavior="padding"
      keyboardVerticalOffset={40}
    >
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
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 60
  },
  subContainer: {
    height: 80,
    width: 50,
    backgroundColor: '#0099ff',
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
