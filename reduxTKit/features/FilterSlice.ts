import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {IProduct} from '../../src/models/ProductModel';
import {RootState} from '../Store';

const initialState = {
  dateFilters: [],
  brandFilters: [],
  modelFilters: [],
};

const FilterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    dateFiltersAction: (state, action) => {
        state.dateFilters=action.payload
    },
    brandFilterAction: (state, action) => {
        state.brandFilters= action.payload
    },
    modelFilterAction: (state, action) => {
        state.modelFilters= action.payload
    },
  },
});

export default FilterSlice.reducer;
export const {dateFiltersAction, brandFilterAction, modelFilterAction} =
  FilterSlice.actions;
