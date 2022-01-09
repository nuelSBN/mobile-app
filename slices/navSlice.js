import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  arrivalInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setArrivalInformation: (state, action) => {
      state.arrivalInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setArrivalInformation } =
  navSlice.actions;

// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectArrivalInformation = (state) => state.nav.arrivalInformation;

export default navSlice.reducer;
