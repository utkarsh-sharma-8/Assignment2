import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Categories from '../Screens/Categories';
import Welcome from '../Screens/Welcome';

const Tab=createMaterialTopTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={Welcome}/>
            <Tab.Screen name="Categories" component={Categories}/>
        </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default AppNavigator