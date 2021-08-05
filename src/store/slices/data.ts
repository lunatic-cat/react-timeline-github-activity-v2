import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

type DataState = [];

const initialState: DataState = [];

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dataLoaded: (state, action: PayloadAction) => {
      console.log(state, action);
    },
  },
});

export const { dataLoaded } = counterSlice.actions;

export default counterSlice.reducer;
