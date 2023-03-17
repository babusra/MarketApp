import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../src/screens/ListScreen';
import ProductDetailScreen from '../src/screens/ProductDetailScreen';
import BasketScreen from '../src/screens/BasketScreen';
import { TabBar } from './TabBar';

const Navigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTab = () => {
    return(
    <Tab.Navigator screenOptions={{header:()=>null, unmountOnBlur:true}} tabBar={props=> <TabBar {...props}/>}>
        <Tab.Screen name='ListScreen' options={{tabBarIcon:"home" }} component={ListScreen}/>
        <Tab.Screen name='BasketScreen' options={{tabBarIcon:"shopping-basket" }} component={BasketScreen}/>

    </Tab.Navigator>
    )
  }

  const MainStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='MainTab' component={MainTab}/>
        
        </Stack.Navigator>
    )
  };



  return(
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  )
};

export default Navigation;
