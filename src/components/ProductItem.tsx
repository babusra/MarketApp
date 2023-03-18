import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {moderateScale, verticalScale} from '../constants/Dimension';
import {Colors} from '../constants/Colors';
import {IProduct} from '../models/ProductModel';
import {useDispatch, useSelector} from 'react-redux';
import {productAmountDecrement, productAmountIncrement} from '../../reduxTKit/features/ProductSlice';
import {RootState} from '../../reduxTKit/Store';

interface Props {
  product: IProduct;
}

const ProductItem = (props: Props) => {
  const dispatch = useDispatch();
  const {product} = props;

  const incremetProductAmount = (item: IProduct) => {
    dispatch(productAmountIncrement(item));
  };

  const decrementProductAmount = (item: IProduct) => {
    dispatch(productAmountDecrement(item));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>{product.name}</Text>
        <Text style={{color: Colors.blue}}>{product.price} ₺</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => decrementProductAmount(product)}
          style={styles.button}>
          <Icon name="minus" size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.amount_text}>
          <Text style={{color: Colors.white}}>{product.total}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => incremetProductAmount(product)}
          style={styles.button}>
          <Icon name="plus" size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
    alignItems: 'center',
  },
  amount_text: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: moderateScale(15),
    backgroundColor: Colors.blue,
  },
  button: {
    backgroundColor: Colors.grey,
    padding: moderateScale(15),
  },
});
