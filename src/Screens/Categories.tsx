import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Header from '../CategoriesComp/Header'
import MainContent from '../CategoriesComp/MainContent'
import { deviceHeight, deviceWidth } from '../Dimesions/Dimensions'

const Categories = () => {
    const [selectedOccupation, setSelectedOccupation] = useState('Astrologer');
    const handleOccupationSelect = (occupation) => {
        setSelectedOccupation(occupation);
      };
  return (
    <View style={styleSheet.overall}>
        <View style={styleSheet.header}>
            <Header onOccupationSelect={handleOccupationSelect}/>
        </View>
        <SafeAreaView style={styleSheet.main}>
            <MainContent selectedOccupation={selectedOccupation}/>
        </SafeAreaView>
    </View>
  )
}

export default Categories

const styleSheet=StyleSheet.create({
    overall:{
        flex:1,
        height:deviceHeight,
        width:deviceWidth,
    },
    header:{
        height:deviceHeight/5,
        width:"100%",
    },
    main:{
        flex:1,
        width:'100%',
        height:"100%",
        marginBottom:10,
        marginRight:6
    }
})