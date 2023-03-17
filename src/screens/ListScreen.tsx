import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import {end_points} from '../../API';
import {IProduct} from '../models/ProductModel';
import Products from '../components/Products';
import Header from '../components/Header';

const ListScreen = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get(end_points.getAllProducts)
      .then(response => setProducts(response.data));
  }, []);
  return (
    <View>
      <Header/>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <TextInput
          style={{borderWidth: 2, height: 40}}
          placeholder={'Search'}
          placeholderTextColor={Colors.black}
        />
        <Products products={products} />
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
