import { createSlice } from '@reduxjs/toolkit';
import sneakersService from '../services/sneakers.service';

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    sneakersRequested: (state) => {
      state.isLoading = true;
    },
    sneakersReceived: (state, action) => {
      state.entities = action.payload;
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
export const getSneakersById = (sneakersId) => (state) => {
  return state.sneakers.entities.find((s) => s._id === sneakersId);
};

export default sneakersReducer;
