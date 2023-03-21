import {combineReducers, configureStore} from '@reduxjs/toolkit';
import FilterSlice from './features/FilterSlice';
import ProductSlice from './features/ProductSlice';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: 'root',
  version:1,
  storage:AsyncStorage,
  blacklist:["filter"]
};

export const rootReducer = combineReducers({
  product: ProductSlice,
  filter: FilterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const persistor = persistStore(Store)