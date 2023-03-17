import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {IProduct} from '../models/ProductModel';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimension';
import { Colors } from '../constants/Colors';
interface Props {
  route?: any;
}

const ProductDetailScreen = (props: Props) => {
  const product = props?.route?.params?.product;
  console.log(product);
  return (
    <View>
      <Header title={product.brand + ' ' + product.name + ' ' + product.model}
      />
      <View style={styles.body}>
        <Image
          style={styles.image}
          source={{uri: product.image}}
        />
        <Text style={styles.title}>  {product.brand + ' ' + product.name + ' ' + product.model}
        </Text>
        <Text>{product.description}</Text>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'auto',bottom:0}}>
        <View>
          <Text style={{color:Colors.blue,fontSize:16}}>Price:</Text>
          <Text>{product.price} ₺</Text>
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add to Cart</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  body: {
    padding: moderateScale(15),
  },
  image: {
    width: '100%',
    height: '40%',
    alignSelf: 'center',
  },
  title: {fontSize: 22, fontWeight: '600',paddingVertical:moderateScale(15)},
  button: {backgroundColor: Colors.blue, borderRadius: 4,width:horizontalScale(150)},
  button_text: {
    color: '#fff',
    fontSize: 16,
    padding: moderateScale(7),
    textAlign: 'center',
  },
});
