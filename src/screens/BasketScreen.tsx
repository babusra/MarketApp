import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import {horizontalScale, moderateScale, verticalScale} from '../constants/Dimension';
import {Colors} from '../constants/Colors';

const BasketScreen = () => {
  return (
    <View >
      <Header />
      <View style={styles.body}>
      <ProductItem />
      <ProductItem />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop:100
        }}>
        <View>
          <Text style={{color: Colors.blue, fontSize: 16}}>Price:</Text>
          <Text>12.000 ₺</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default BasketScreen;
const styles = StyleSheet.create({
  body: {
    paddingHorizontal: horizontalScale(15),
  },
  button: {
    backgroundColor: Colors.blue,
    borderRadius: 4,
    width: horizontalScale(150),
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    padding: moderateScale(7),
    textAlign: 'center',
  },
});
