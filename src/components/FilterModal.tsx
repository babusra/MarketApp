import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FilterItems from './FilterItems';
import {moderateScale, verticalScale} from '../constants/Dimension';
import {IProduct} from '../models/ProductModel';
import {Colors} from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {filteredProductAction} from '../../reduxTKit/features/ProductSlice';
import {RootState} from '../../reduxTKit/Store';
import {useNavigation} from '@react-navigation/native';
import { dateFiltersAction } from '../../reduxTKit/features/FilterSlice';

interface Props {
  products: IProduct[];
  onPressClose: () => void;
}

const FilterModal = (props: Props) => {
  const {products} = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchItem, setSearchItem] = useState('');

  const [dateFilter, setDateFilter] = useState([
    {option: 'Old to new', selected: false},
    {option: 'New to old', selected: false},
    {option: 'Price high to low', selected: false},
    {option: 'Price low to high', selected: false},
  ]);

  const [filteredBrand, setFilteredBrand] = useState<any[]>([]);
  const [filteredModel, setFilteredModel] = useState<any[]>([]);

 const date= useSelector((state:RootState)=>state.filter)
  const onSearchFilter = (text: string, filterType: any) => {
    if (text) {
      const filteredData: IProduct[] = products.filter(item =>
        filterType === 'brand'
          ? item.brand.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())
          : filterType === 'model'
          ? item.model.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())
          : null,
      );
      filterType === 'brand'
        ? setFilteredBrand(
            filteredData.map((item: IProduct) => {
              return {
                option: item.brand,
                selected: false,
              };
            }),
          )
        : filterType === 'model'
        ? setFilteredModel(
            filteredData.map((item: IProduct) => {
              return {
                option: item.model,
                selected: false,
              };
            }),
          )
        : null;
    } else {
      setFilteredBrand(
        products.map((item: IProduct) => {
          return {
            option: item.brand,
            selected: false,
          };
        }),
      );
      setFilteredModel(
        products.map((item: IProduct) => {
          return {
            option: item.model,
            selected: false,
          };
        }),
      );
    }
  };
  const onFilterByAllOptions = () => {
    let data1 = Array.from(
      new Set(filteredBrand.filter(x => x.selected).map(item => item.option)),
    );
    let data2 = Array.from(
      new Set(filteredModel.filter(x => x.selected).map(item => item.option)),
    );

    let selectedDateType = dateFilter.find(item => item.selected)?.option;

    switch (selectedDateType) {
      case 'Old to new':
        return dispatch(
          filteredProductAction(
            products
              .filter(
                item =>
                  data1.includes(item.brand) && data2.includes(item.model),
              )
              .sort((a, b) => {
                return new Date(a.createdAt) - new Date(b.createdAt);
              }),
          ),
        );
      case 'New to old':
        return dispatch(
          filteredProductAction(
            products
              .filter(
                item =>
                  data1.includes(item.brand) && data2.includes(item.model),
              )
              .sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
              }),
          ),
        );

      case 'Price high to low':
        return dispatch(
          filteredProductAction(
            products
              .filter(
                item =>
                  data1.includes(item.brand) && data2.includes(item.model),
              )
              .sort((a, b) => {
                return a.price - b.price;
              }),
          ),
        );
      case 'Price low to high':
        return dispatch(
          filteredProductAction(
            products
              .filter(
                item =>
                  data1.includes(item.brand) && data2.includes(item.model),
              )
              .sort((a, b) => {
                return b.price - a.price;
              }),
          ),
        );
      default:
        return products;
    }
  };

  useEffect(() => {
    setFilteredBrand(
      products.map((item: IProduct) => {
        return {
          option: item.brand,
          selected: false,
        };
      }),
    );

    setFilteredModel(
      products.map((item: IProduct) => {
        return {
          option: item.model,
          selected: false,
        };
      }),
    );
  }, []);

  return (
    <ScrollView
      style={{paddingTop: moderateScale(50), backgroundColor: Colors.white}}>
      <View
        style={{
          flexDirection: 'row',
          padding: moderateScale(6),
          justifyContent: 'space-between',
          borderBottomWidth: 2,
          borderBottomColor: Colors.grey,
        }}>
        <TouchableOpacity onPress={() => props.onPressClose()}>
          <Icon name="close" size={25} />
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', paddingRight: '45%', fontSize: 25}}>
          Filter
        </Text>
      </View>

      <View style={styles.filterContainer}>
        <Text style={{color: 'darkgrey'}}>Sort By</Text>
        <FlatList
          data={dateFilter}
          key={'SortByDate'}
          style={{borderBottomWidth: 2, borderBottomColor: Colors.grey}}
          renderItem={({item}) => {
            return (
              <FilterItems.DateFilter
                dateOption={item}
                onPress={() => {
                  let temp = [];
                  temp = dateFilter.slice();
                  temp.map(x => {
                    if (x.option === item.option) {
                      x.selected = true;
                    } else {
                      x.selected = false;
                    }
                  });
                  setDateFilter(temp);
                  dispatch(dateFiltersAction(temp))
                }}
              />
            );
          }}
        />
      </View>

      <View style={styles.filterContainer}>
        <View>
          <Text style={{color: 'darkgrey'}}>Brand</Text>
          <TextInput
            style={{
              backgroundColor: '#E1E1E1',
              marginVertical: moderateScale(20),
              borderRadius: 8,
              height: moderateScale(40),
              padding: moderateScale(5),
              borderColor: Colors.grey,
            }}
            defaultValue={searchItem}
            onChangeText={(text: string) => onSearchFilter(text, 'brand')}
            placeholder={'Search...'}
            placeholderTextColor={'darkgrey'}
          />
        </View>
        <FlatList
          data={filteredBrand.filter(
            (item: any, index: any, self: any) =>
              index === self.findIndex((t: any) => t.option === item.option),
          )}
          key={'SortByBrand'}
          style={{
            height: moderateScale(250),
            borderBottomWidth: 2,
            borderBottomColor: Colors.grey,
          }}
          renderItem={({item}) => {
            return (
              <FilterItems.OptionFilter
                option={item}
                onPress={() => {
                  let temp = [];
                  temp = filteredBrand.slice();
                  temp.map(x => {
                    if (x.option === item.option) {
                      x.selected = true;
                    }
                  });
                  setFilteredBrand(temp);
                }}
              />
            );
          }}
        />
      </View>

      <View style={styles.filterContainer}>
        <View>
          <Text style={{color: 'darkgrey'}}>Model</Text>
          <TextInput
            style={{
              backgroundColor: '#E1E1E1',
              marginVertical: moderateScale(20),
              borderRadius: 8,
              height: moderateScale(40),
              padding: moderateScale(5),
              borderColor: Colors.grey,
            }}
            defaultValue={searchItem}
            onChangeText={(text: string) => onSearchFilter(text, 'model')}
            placeholder={'Search...'}
            placeholderTextColor={'darkgrey'}
          />
        </View>
        <FlatList
          data={filteredModel.filter(
            (item: any, index: any, self: any) =>
              index === self.findIndex((t: any) => t.option === item.option),
          )}
          style={{
            height: moderateScale(250),
            borderBottomWidth: 2,
            borderBottomColor: Colors.grey,
          }}
          key={'SortByModel'}
          renderItem={({item}) => {
            return (
              <FilterItems.OptionFilter
                option={item}
                onPress={() => {
                  let temp = [];
                  temp = filteredModel.slice();
                  temp.map(x => {
                    if (x.option === item.option) {
                      x.selected = !x.selected;
                    }
                  });
                  setFilteredModel(temp);
                }}
              />
            );
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          onFilterByAllOptions();
          props.onPressClose()
        }}
        style={{
          height: moderateScale(50),
          width: '90%',
          borderRadius: 10,
          backgroundColor: Colors.blue,
          justifyContent: 'center',
          marginBottom: moderateScale(70),
          marginLeft: moderateScale(20),
        }}>
        <Text
          style={{color: Colors.white, fontSize: 20, paddingHorizontal: '40%'}}>
          Primary
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  filterContainer: {
    padding: moderateScale(15),
  },
});
