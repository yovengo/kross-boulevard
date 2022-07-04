import { combineReducers, configureStore } from '@reduxjs/toolkit';
import materialsReducer from './materials';
import brandsReducer from './brands';
import sneakersReducer from './sneakers';
import usersReducer from './users';

const rootReducer = combineReducers({
  materials: materialsReducer,
  brands: brandsReducer,
  sneakers: sneakersReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
