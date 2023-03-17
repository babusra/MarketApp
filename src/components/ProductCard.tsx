import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {IProduct} from '../models/ProductModel';
import { horizontalScale, moderateScale, verticalScale } from '../constants/Dimension';

interface Props {
  product: IProduct;
}

const ProductCard = (props: Props) => {
  const {product} = props;

  return (
    <TouchableOpacity style={styles.container}>
     
        <Image style={{width:horizontalScale(100),height:verticalScale(100),alignSelf:'center'}} source={{uri:'https://placeimg.com/640/480/abstract'}}/>
      <Text style={styles.text_price}>{product.price} ₺</Text>
      <Text style={styles.text_productName}>{product.brand}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 8,
    height: verticalScale(250),
    width: horizontalScale(150),
    padding: 10,
    justifyContent: 'space-between',
    margin:moderateScale(10)
  },
  text_price: {color: 'blue'},
  text_productName: {fontSize: 12},
  button: {backgroundColor: 'blue', borderRadius: 4},
  button_text: {
    color: '#fff',
    fontSize: 12,
    padding: moderateScale(9),
    textAlign: 'center',
  },
});
