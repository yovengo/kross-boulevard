import { createAction, createSlice } from '@reduxjs/toolkit';
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
    sneakersCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    sneakersRemoved: (state, action) => {
      state.entities = state.entities.filter((sneakersPair) => sneakersPair._id !== action.payload);
    },
    sneakersUpdated: (state, action) => {
      state.entities[state.entities.findIndex((u) => u._id === action.payload._id)] = action.payload;
    },
  },
});

const { reducer: sneakersReducer, actions } = sneakersSlice;
const {
  sneakersRequested,
  sneakersReceived,
  sneakersRequestFailed,
  sneakersCreated,
  sneakersRemoved,
  sneakersUpdated,
} = actions;

const sneakersCreateRequested = createAction('sneakers/sneakersCreateRequested');
const sneakersCreateFailed = createAction('sneakers/sneakersCreateFailed');
const sneakersRemoveRequested = createAction('sneakers/removeSneakersRequested');
const sneakersRemoveFailed = createAction('sneakers/removeSneakersFailed');
const sneakersUpdateRequested = createAction('sneakers/sneakersUpdateRequested');
const sneakersUpdateFailed = createAction('sneakers/sneakersUpdateFailed');

export const loadSneakersList = () => async (dispatch) => {
  dispatch(sneakersRequested());
  try {
    const { content } = await sneakersService.get();
    dispatch(sneakersReceived(content));
  } catch (error) {
    dispatch(sneakersRequestFailed(error.message));
  }
};

export const createSneakers = (payload) => async (dispatch) => {
  dispatch(sneakersCreateRequested());
  try {
    const { content } = sneakersService.create(payload);
    dispatch(sneakersCreated(content));
  } catch (error) {
    dispatch(sneakersCreateFailed(error.message));
  }
};

export const removeSneakers = (sneakersId) => async (dispatch) => {
  dispatch(sneakersRemoveRequested());
  try {
    const { content } = await sneakersService.remove(sneakersId);
    if (!content) {
      dispatch(sneakersRemoved(sneakersId));
    }
  } catch (error) {
    dispatch(sneakersRemoveFailed(error.message));
  }
};

export const updateSneakersData = (payload) => async (dispatch) => {
  dispatch(sneakersUpdateRequested());
  try {
    const { content } = await sneakersService.update(payload);
    dispatch(sneakersUpdated(content));
  } catch (error) {
    dispatch(sneakersUpdateFailed(error.message));
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
