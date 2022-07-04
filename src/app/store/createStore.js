import { combineReducers, configureStore } from '@reduxjs/toolkit';
import materialsReducer from './materials';
import brandsReducer from './brands';
import sneakersReducer from './sneakers';

const rootReducer = combineReducers({
  materials: materialsReducer,
  brands: brandsReducer,
  sneakers: sneakersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
