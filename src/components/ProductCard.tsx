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
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasketAction,
  addToFavoritesAction,
  productAmountIncrement,
} from '../../reduxTKit/features/ProductSlice';
import {RootState} from '../../reduxTKit/Store';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  product: IProduct;
}

const ProductCard = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {product} = props;

  const products = useSelector(
    (state: RootState) => state.product.value.productsInBasket,
  );

  const onAddToBasket = (item: IProduct) => {
    dispatch(addToBasketAction(item));
    navigation.navigate('BasketScreen');
  };

  const addToFavorites = (item: IProduct) => {
    dispatch(addToFavoritesAction(item));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetailScreen', {product: product})
      }
      style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: product.image}} />
        <TouchableOpacity
          onPress={()=>addToFavorites(product)} 
          style={{position: 'absolute', right: 20}}>
          <Icon name={product.isFavorite?"star": "staro"} size={20} color={Colors.yellow} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text_price}>{product.price} ₺</Text>
      <Text style={styles.text_productName}>{product.name}</Text>
      <TouchableOpacity
        onPress={() => onAddToBasket(product)}
        style={styles.button}>
        <Text style={styles.button_text}>Add to Card</Text>
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
