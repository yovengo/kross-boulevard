import { createSlice } from '@reduxjs/toolkit';
import materialService from '../services/material.service';

const materialsSlice = createSlice({
  name: 'materials',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    materialsRequested: (state) => {
      state.isLoading = true;
    },
    materialsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    materialsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: materialsReducer, actions } = materialsSlice;
const { materialsRequested, materialsReceived, materialsRequestFailed } = actions;

export const loadMaterialsList = () => async (dispatch) => {
  dispatch(materialsRequested());
  try {
    const { content } = await materialService.fetchAll();
    dispatch(materialsReceived(content));
  } catch (error) {
    dispatch(materialsRequestFailed(error.message));
  }
};

export const getMaterials = () => (state) => state.materials.entities;
export const getMaterialsLoadingStatus = () => (state) => state.materials.isLoading;
export const getMaterialsByIds = (materialsIds) => (state) => {
  if (state.materials.entities && materialsIds) {
    const materialsArray = [];
    for (const materId of materialsIds) {
      for (const material of state.materials.entities) {
        if (material._id === materId) {
          materialsArray.push(material);
          break;
        }
      }
    }
    return materialsArray;
  }
  return [];
};

export default materialsReducer;
