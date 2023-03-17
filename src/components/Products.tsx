import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import {IProduct} from '../models/ProductModel';

interface Props {
  products: IProduct[];
}

const Products = (props: Props) => {
  const {products} = props;
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={products}
        numColumns={2}
        key={'productList'}
        renderItem={({item}) => {
          return <ProductCard product={item} />;
        }}
      />
    </View>
  );
};

export default Products;
