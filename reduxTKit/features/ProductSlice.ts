import {View, Text} from 'react-native';
import React from 'react';
import {createSlice, current} from '@reduxjs/toolkit';
import {IInitialProductState} from '../../src/models/InitialProductState';
import {IProduct} from '../../src/models/ProductModel';

const initialState: IInitialProductState = {
  allProducts: [],
  filteredProducts: [],
  productsInBasket: [],
  totalProductPrice: 0,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState: {value: initialState},
  reducers: {
    allProductAction: (state, action) => {
      state.value.allProducts = action.payload;
      state.value.allProducts.map(function (obj) {
        (obj.total = 0), (obj.isFavorite = false);
      });
    },
    filteredProductAction: (state, action) => {
      state.value.filteredProducts = action.payload;
    },
    addToFavoritesAction: (state, action) => {
      let currentProducts = state.value.allProducts.slice();
      currentProducts.map(item => {
        if (item.id === action.payload.id) {
          item.isFavorite = !item.isFavorite;
        }
      });

    },
    addToBasketAction: (state, action) => {
      let existingProducts = current(state).value.productsInBasket.find(
        (item: IProduct) => {
          item.id === action.payload.id;
        },
      );
      if (existingProducts === undefined) {
        state.value.productsInBasket.push({...action.payload, total: 1});
      } else {
        existingProducts.total++;
      }

      var temp = 0;
      for (var i = 0; i < state.value.productsInBasket.length; i++) {
        temp +=
          Number(state.value.productsInBasket[i].price) *
          state.value.productsInBasket[i].total;
        state.value.totalProductPrice = temp;
      }
    },
    productAmountIncrement: (state, action) => {
      let currentProducts = state.value.productsInBasket.slice();
      currentProducts.map(item => {
        if (item.id === action.payload.id) {
          item.total++;
        }
      });

      var temp = 0;
      for (var i = 0; i < state.value.productsInBasket.length; i++) {
        temp +=
          Number(state.value.productsInBasket[i].price) *
          state.value.productsInBasket[i].total;
        state.value.totalProductPrice = temp;
      }
    },
    productAmountDecrement: (state, action) => {
      let currentProducts = state.value.productsInBasket.slice();
      currentProducts.map(item => {
        if (item.id === action.payload.id) {
          if (item.total !== 0) {
            item.total--;
          } else {
            item.total = 0;
          }
        }
      });
      var temp = 0;
      for (var i = 0; i < state.value.productsInBasket.length; i++) {
        temp +=
          Number(state.value.productsInBasket[i].price) *
          state.value.productsInBasket[i].total;
        state.value.totalProductPrice = temp;
      }
    },
  },
});

export default ProductSlice.reducer;
export const {
  allProductAction,
  addToBasketAction,
  addToFavoritesAction,
  filteredProductAction,
  productAmountIncrement,
  productAmountDecrement,
} = ProductSlice.actions;
