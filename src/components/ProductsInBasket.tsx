import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxTKit/Store';
import ProductItem from './ProductItem';

const ProductsInBasket = () => {
  const productsInBasket = useSelector(
    (state: RootState) => state.product.value.productsInBasket,
  );
  return (
    <FlatList
      data={productsInBasket}
      renderItem={({item, index}) => {
        return item.total !== 0 && <ProductItem key={index} product={item} />;
      }}
    />
  );
};

export default ProductsInBasket;
