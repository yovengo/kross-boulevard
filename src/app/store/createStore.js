import { combineReducers, configureStore } from '@reduxjs/toolkit';
import materialsReducer from './materials';
import brandsReducer from './brands';

const rootReducer = combineReducers({ materials: materialsReducer, brands: brandsReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
