import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const data=[
    {
        id:1,
        occupation:"Astrologer",
        icon:require("../images/Astrologer.png")
    },
    {
        id:2,
        occupation:"Assistant",
        icon:require("../images/Assitantpng.png")
    },
    {
        id:3,
        occupation:"Makeup",
        icon:require("../images/Makeup.png")
    },
    {
        id:4,
        occupation:"Mehndi",
        icon:require("../images/Mehendi.png")
    },
    {
        id:5,
        occupation:"Photographer",
        icon:require("../images/PhotoGrapher.png")
    },
    
]

const Header = ({onOccupationSelect}) => {
  return (
    <View>
        <View style={styleSheet.container}>
      {
        data.map(item=>{
            return(
                <TouchableOpacity style={styleSheet.itemView} key={item.id}onPress={() => onOccupationSelect(item.occupation)}>
                    <Image source={item.icon} style={styleSheet.image} key={item.id}/>
                    <Text style={styleSheet.itemText}>{item.occupation}</Text>
                </TouchableOpacity>  
            )
        })
      }
      </View>
    </View>
  )
}

export default Header

const styleSheet=StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        height:'100%',
        width:'100%'
    },
    itemView:{
        marginTop:30,
        marginLeft:5
    },
    image:{
        width: 75,
        height: 80
    },
    itemText:{
        color:'black',
    }
})