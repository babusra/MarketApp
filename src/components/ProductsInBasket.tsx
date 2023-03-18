import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reduxTKit/Store'
import ProductItem from './ProductItem'

const ProductsInBasket = () => {
    const productsInBasket=useSelector((state:RootState)=>state.product.value.productsInBasket)
  return (
    <FlatList
    data={productsInBasket}
    
    renderItem={({item})=>{
        return(
            <ProductItem product={item}/>
        )
    }}/>
  )
}

export default ProductsInBasket