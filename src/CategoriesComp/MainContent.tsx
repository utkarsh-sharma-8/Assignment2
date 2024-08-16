import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from "react-native-vector-icons/FontAwesome";
import { deviceHeight, deviceWidth } from '../Dimesions/Dimensions';
import WorkCategories from '../JSON_files/WorkCategories.json';

const RenderItem=({item})=>{//render item function
    return(
        <View style={stylesheet.container}>
            <View style={stylesheet.imageView}>
                <Image source={{uri:item.profile_picture}} style={stylesheet.imageProfile}/>
                <View style={stylesheet.flagView}>
                    <Image source={{uri:item.flag_url}} style={stylesheet.flag}/>
                </View>
                <View>
                    <Text style={stylesheet.nameText}>{item.name}</Text>
                </View>
            </View>
        </View>
    );
};

const MainContent = ({selectedOccupation}) => {
const[numofcoloumns,setNum]=useState(4);
const [searchQuery, setSearchQuery] = useState('');
const [filteredData, setFilteredData] = useState(WorkCategories);

//Search functionalty code
const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
        const newData = WorkCategories.filter(item => {
            const itemName = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const itemCountry = item.country ? item.country.toUpperCase() : ''.toUpperCase();
            const itemOccupation = item.occupation ? item.occupation.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemName.indexOf(textData) > -1 ||
                   itemCountry.indexOf(textData) > -1 ||
                   itemOccupation.indexOf(textData) > -1;
        });
        setFilteredData(newData);
    } else {
        setFilteredData(WorkCategories);
    }
};//search functionality code ended

useEffect(() => {
    if (selectedOccupation) {
      const newData = WorkCategories.filter((item) =>
        item.occupation.toUpperCase().includes(selectedOccupation.toUpperCase())
      );
      setFilteredData(newData);
    } else {
      setFilteredData(WorkCategories);
    }
  }, [selectedOccupation]);//Prop Recieved from Header file 
  return (
    <SafeAreaView style={{flex:1}}> 
        <View style={stylesheet.inputView}>
            <Icon name="search1" size={25} style={stylesheet.icon}/>
            <TextInput placeholder='Search' style={stylesheet.textInput} onChangeText={text => handleSearch(text)}/>
            <Icon2 name="microphone" size={25} style={stylesheet.icon}/>
            <Icon name="setting" size={25} style={stylesheet.icon}/>
        </View>
        <SafeAreaView style={{height:'100%'}}>
            <FlatList data={filteredData} numColumns={numofcoloumns} 
            renderItem={RenderItem} 
            keyExtractor={item=>item.id.toString()}/>
        </SafeAreaView>
    </SafeAreaView>
  )
}

export default MainContent

const stylesheet=StyleSheet.create({
    container:{
        flex:1,
        marginBottom:deviceHeight/30
    },
    inputView:{
        marginLeft:5,
        marginRight:5,
        flexDirection:'row',
        marginBottom:10
    },
    textInput:{
        borderColor:"white",
        borderWidth:2,
        borderRadius:5,
        fontSize:20,
        padding:5,
        width:'70%',
    },
    icon:{
        margin:10,
        color:'black'
    },
    imageView:{
        flex:1,
        paddingLeft:3,
        paddingRight:3,
        marginTop:0,
        marginBottom:deviceHeight/50,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        position:"relative"
    },
    imageProfile:{
        width:deviceWidth/5,
        height:deviceHeight/9,
        marginRight:deviceWidth/29,
        borderRadius:100,
    },
    flagView:{
        position:'absolute',
    },
    flag:{
        width:deviceWidth/12,
        height:deviceHeight/24,
        borderRadius:100,
        marginLeft:deviceWidth/8
    },
    nameText:{
        color:"black",
    }
})