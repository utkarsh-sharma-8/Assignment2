import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
  return (
    <View style={stylesheet.view}>
      {/* Welcome Text */}
      <Text style={stylesheet.text}>Welcome</Text>
    </View>
  )
}

export default Welcome

const stylesheet=StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})