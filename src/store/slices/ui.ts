import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  isAllEventsLoaded: boolean;
};

const initialState: UIState = {
  isAllEventsLoaded: false,
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    allEventsLoaded: (state) => ({ ...state, isAllEventsLoaded: true }),
  },
});

export const { allEventsLoaded } = UISlice.actions;

export default UISlice.reducer;
