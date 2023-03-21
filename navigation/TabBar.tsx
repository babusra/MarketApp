import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {RootState} from '../reduxTKit/Store';
import {Colors} from '../src/constants/Colors';
import {moderateScale} from '../src/constants/Dimension';

export function TabBar({state, descriptors, navigation}: any) {
  const totalProduct = useSelector(
    (state: RootState) => state.product.value.productsInBasket,
  );

  const total = totalProduct
    .map(item => item.total)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={{borderWidth: 1, borderColor: Colors.grey}} />
            <View style={{alignSelf: 'center', marginVertical: 24}}>
              <Icon name={options.tabBarIcon} size={30} color={Colors.black} />
              {options.tabBarIcon === 'shopping-basket' && (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: moderateScale(20),
                    height: moderateScale(20),
                    borderRadius: 30,
                    backgroundColor:'red',
                    position:'absolute',right:-moderateScale(10),top:-moderateScale(10)
                  }}>
                  <Text style={{color:Colors.white}}>{total}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
