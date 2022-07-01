import { combineReducers, configureStore } from '@reduxjs/toolkit';
import materialsReducer from './materials';

const rootReducer = combineReducers({ materials: materialsReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
