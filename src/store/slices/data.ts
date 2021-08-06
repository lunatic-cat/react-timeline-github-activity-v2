import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

type DataState = [];

const initialState: DataState = [];

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataLoaded: (state, action: PayloadAction) => {
      console.log(state, action);
    },
  },
});

export const { dataLoaded } = dataSlice.actions;

export default dataSlice.reducer;
