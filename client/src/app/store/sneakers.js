import { createSlice } from '@reduxjs/toolkit';
import sneakersService from '../services/sneakers.service';

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    dataLoaded: false,
  },
  reducers: {
    sneakersRequested: (state) => {
      state.isLoading = true;
    },
    sneakersReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    sneakersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: sneakersReducer, actions } = sneakersSlice;
const { sneakersRequested, sneakersReceived, sneakersRequestFailed } = actions;

export const loadSneakersList = () => async (dispatch) => {
  dispatch(sneakersRequested());
  try {
    const { content } = await sneakersService.get();
    dispatch(sneakersReceived(content));
  } catch (error) {
    dispatch(sneakersRequestFailed(error.message));
  }
};

export const getSneakers = () => (state) => state.sneakers.entities;
export const getSneakersLoadingStatus = () => (state) => state.sneakers.isLoading;
export const getSneakersById = (sneakersId) => (state) =>
  state.sneakers.entities ? state.sneakers.entities.find((s) => s._id === sneakersId) : null;

export const getSneakersByIds = (sneakersIds) => (state) => {
  if (state.sneakers.entities && sneakersIds) {
    const sneakersArray = [];
    for (const sneakId of sneakersIds) {
      for (const sneakers of state.sneakers.entities) {
        if (sneakers._id === sneakId) {
          sneakersArray.push(sneakers);
          break;
        }
      }
    }
    return sneakersArray;
  }
  return [];
};
export const getDataStatus = () => (state) => state.sneakers.dataLoaded;

export default sneakersReducer;
