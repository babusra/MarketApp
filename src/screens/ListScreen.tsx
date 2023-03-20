import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import {end_points} from '../../API';
import {IProduct} from '../models/ProductModel';
import Products from '../components/Products';
import Header from '../components/Header';
import {moderateScale} from '../constants/Dimension';
import {BottomSheet} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {allProductAction} from '../../reduxTKit/features/ProductSlice';
import {RootState} from '../../reduxTKit/Store';
import FilterModal from '../components/FilterModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.value.allProducts,
  );

  const filteredProductsByOptions = useSelector(
    (state: RootState) => state.product.value.filteredProducts,
  );
  console.log(filteredProductsByOptions);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchItem, setSearchItem] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios.get(end_points.getAllProducts).then(
      response => AsyncStorage.setItem('products', JSON.stringify(response?.data)),

    ).then(()=>{
      AsyncStorage.getItem('products')
      .then(JSON.parse)
      .then(value => {
        dispatch(allProductAction(value));
      });
    })
  }, []);


  const onSearchFilter = (text: string) => {
    if (text) {
      const filteredData: IProduct[] = (
        filteredProductsByOptions.length !== 0
          ? filteredProductsByOptions
          : products
      ).filter(item =>
        item.name.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()),
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
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
            padding: moderateScale(5),
            borderColor: Colors.grey,
          }}
          defaultValue={searchItem}
          onChangeText={(text: string) => onSearchFilter(text)}
          placeholder={'Search...'}
          placeholderTextColor={Colors.grey}
        />
        <Button
          title="Filter"
          onPress={() => {
            setVisible(true);
          }}
        />
        <BottomSheet isVisible={visible}>
          <FilterModal
            products={products}
            onPressClose={() => setVisible(false)}
          />
        </BottomSheet>
        <Products
          products={
            filteredProducts.length !== 0
              ? filteredProducts
              : filteredProductsByOptions.length !== 0
              ? filteredProductsByOptions
              : products
          }
        />
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
