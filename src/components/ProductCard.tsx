import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {IProduct} from '../models/ProductModel';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimension';
import {Colors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  product: IProduct;
}

const ProductCard = (props: Props) => {
  const navigation = useNavigation();
  const {product} = props;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetailScreen', {product: product})
      }
      style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://placeimg.com/640/480/abstract'}}
      />
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
    borderColor: Colors.grey,
    borderRadius: 8,
    height: verticalScale(250),
    width: horizontalScale(150),
    padding: 10,
    justifyContent: 'space-between',
    margin: moderateScale(10),
  },
  image: {
    width: horizontalScale(120),
    height: verticalScale(120),
    alignSelf: 'center',
  },
  text_price: {
    color: Colors.blue,
  },
  text_productName: {
    fontSize: 12,
  },
  button: {
    backgroundColor: Colors.blue,
    borderRadius: 4,
  },
  button_text: {
    color: Colors.white,
    fontSize: 12,
    padding: moderateScale(9),
    textAlign: 'center',
  },
});
