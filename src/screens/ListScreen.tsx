import {View, Text, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import {end_points} from '../../API';
import {IProduct} from '../models/ProductModel';
import Products from '../components/Products';
import Header from '../components/Header';
import { moderateScale } from '../constants/Dimension';

const ListScreen = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
     axios
       .get(end_points.getAllProducts)
       .then(response => setProducts(response.data));

  }, []);

  useEffect(() => {
    products.map(function (obj) {
      obj.total = 0;
    });
    
  }, [products]);



  const onSearchFilter = (text: string) => {
    if(text){
      const filteredData: IProduct[] = products.filter(item =>
        item.name.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()),
      );
      setFilteredProducts(filteredData)
    }
    else{
      setFilteredProducts(products)
    }

  };

  return (
    <View>
      <Header />
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            height: moderateScale(40),
            padding:moderateScale(5),
            borderColor: Colors.grey,
          }}
          defaultValue={searchItem}
          onChangeText={(text: string) => onSearchFilter(text)}
          placeholder={'Search...'}
          placeholderTextColor={Colors.grey}
        />
        <Products products={filteredProducts.length!==0?filteredProducts:products} />
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: Colors.blue,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
