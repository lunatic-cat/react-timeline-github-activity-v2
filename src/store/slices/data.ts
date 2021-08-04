import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DataState = [];

const initialState: DataState = [];

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dataFetched: (state, action: PayloadAction) => {
      console.log(state, action);
    },
  },
});

export const { dataFetched } = counterSlice.actions;

export default counterSlice.reducer;
