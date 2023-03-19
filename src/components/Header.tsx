import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import {horizontalScale, moderateScale} from '../constants/Dimension';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

interface Props {
  title?: string;
  showBackButton?: boolean;
}

const Header = (props: Props) => {
  const navigation = useNavigation();
  const {title, showBackButton} = props;
  return (
    <SafeAreaView style={styles.container}>
      {showBackButton && (
        <TouchableOpacity
          style={{paddingLeft: moderateScale(15)}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" color={Colors.white} size={25} />
        </TouchableOpacity>
      )}

      <Text numberOfLines={1} style={styles.title}>
        {title || 'E-Market'}
      </Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    height: moderateScale(80),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {color: '#fff', fontSize: 25, paddingHorizontal: 10},
});
