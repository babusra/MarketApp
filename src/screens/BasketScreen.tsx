import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimension';
import {Colors} from '../constants/Colors';
import ProductsInBasket from '../components/ProductsInBasket';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxTKit/Store';

const BasketScreen = () => {
  const totalProductPrice = useSelector(
    (state: RootState) => state.product.value.totalProductPrice,
  );

  return (
    <View>
      <Header />
      <View style={styles.body}>
        <ProductsInBasket />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 100,
          }}>
          <View>
            <Text style={{color: Colors.blue, fontSize: 16}}>Price:</Text>
            <Text>{totalProductPrice} ₺</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Complete</Text>
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
