import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View
      style={styles.container}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'lightgrey',
          alignItems: 'center',
          height: '50%',
        }}>
        <Text>Image</Text>
      </View>
      <Text style={styles.text_price}>15.000 ₺</Text>
      <Text style={styles.text_productName}>iPhone 13 Pro Max 256Gb</Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.button_text}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 8,
        height: '60%',
        width: '40%',
        padding: 10,
        justifyContent: 'space-between',
    },
    text_price:{color: 'blue'},
    text_productName:{fontSize: 12},
    button:{backgroundColor: 'blue', borderRadius: 4},
    button_text:{
        color: '#fff',
        fontSize: 12,
        padding: 7,
        textAlign: 'center',
      }

});
