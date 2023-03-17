import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import ProductCard from '../components/ProductCard'

const ListScreen = () => {
  return (
    <View>
      <View style={{backgroundColor:'lightblue',height:80,justifyContent:'center',paddingHorizontal:20}}>
      <Text style={{color:"#fff",fontSize:25}}>E-Market</Text>
      </View>
      <View style={{paddingHorizontal:20,paddingVertical:10}}>
      <TextInput style={{borderWidth:2,height:40}} placeholder={'Search'} placeholderTextColor={Colors.black}/>
      <ProductCard/>
      </View>

    </View>
  )
}

export default ListScreen