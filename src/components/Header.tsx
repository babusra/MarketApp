import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import {horizontalScale, moderateScale} from '../constants/Dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

interface Props {
  title?: string;
}

const Header = (props: Props) => {
    const navigation = useNavigation()
  const {title} = props;
  return (
    <SafeAreaView  style={styles.container}>
      <TouchableOpacity style={{paddingLeft:moderateScale(15)}} onPress={()=>navigation.goBack()}>
        <Icon name="arrowleft" color={Colors.white} size={25} />
      </TouchableOpacity>
      <Text numberOfLines={2} style={styles.title}>{title || 'E-Market'}</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    height: moderateScale(80),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {color: '#fff', fontSize: 25, paddingHorizontal: 20},
});
