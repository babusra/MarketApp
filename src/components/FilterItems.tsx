import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {moderateScale} from '../constants/Dimension';
import {Colors} from '../constants/Colors';

interface IDateFilter {
  onPress: () => void;
  dateOption: {
    selected: boolean;
    option: string;
  };
}

interface IOptionFilter {
  onPress: () => void;
  option: {
    selected: boolean;
    option: string;
  };
}

const FilterItems = {
  DateFilter: (props: IDateFilter) => DateFilter(props),
  OptionFilter: (props: IOptionFilter) => OptionFilter(props),
};
const DateFilter: FC<IDateFilter> = props => {
  const {dateOption,onPress} = props;
  return (
    <View style={{flexDirection: 'row',padding:moderateScale(10)}}>
      <TouchableOpacity
        onPress={()=>onPress()}
        style={{
            borderRadius: 100,
            width: moderateScale(20),
            height: moderateScale(20),
            padding: moderateScale(3),
            marginRight:moderateScale(5),
            borderColor:Colors.blue,
            borderWidth:2,
            backgroundColor: dateOption.selected ? Colors.blue : Colors.white,
        }}></TouchableOpacity>
      <Text>{dateOption.option}</Text>
    </View>
  );
};

const OptionFilter: FC<IOptionFilter> = props => {
  const {option,onPress} = props;
  return (
    <View style={{flexDirection: 'row',padding:moderateScale(10)}}>
      <TouchableOpacity
              onPress={()=>onPress()}

        style={{
          borderRadius: 5,
          width: moderateScale(20),
          height: moderateScale(20),
          padding: moderateScale(3),
          marginRight:moderateScale(5),
          borderColor:Colors.blue,
          borderWidth:2,
          backgroundColor: option.selected ? Colors.blue : Colors.white,
        }}></TouchableOpacity>
      <Text>{option.option}</Text>
    </View>
  );
};

export default FilterItems;
