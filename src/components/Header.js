import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    //backgroundColor: '#eaeaea',
    backgroundColor: '#0099ff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    padding: 5
  }
})

export { Header }
