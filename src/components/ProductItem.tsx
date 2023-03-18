import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {moderateScale, verticalScale} from '../constants/Dimension';
import {Colors} from '../constants/Colors';

const ProductItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Samsung s22</Text>
        <Text style={{color:Colors.blue}}>12.000 ₺</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button}>
          <Icon name="minus" size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.amount_text}>
          <Text style={{color: Colors.white}}>45</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    marginVertical:verticalScale(10),
    alignItems:'center'
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
