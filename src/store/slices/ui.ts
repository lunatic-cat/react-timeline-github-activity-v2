import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  isAllEventsLoaded: boolean;
  isAdditionalEventsLoaded: boolean;
};

const initialState: UIState = {
  isAllEventsLoaded: false,
  isAdditionalEventsLoaded: false,
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    allEventsLoaded: (state) => ({
      ...state,
      isAllEventsLoaded: true,
      isAdditionalEventsLoaded: true,
    }),
    additionalEventsLoading: (state) => ({ ...state, isAdditionalEventsLoaded: false }),
  },
});

export const { allEventsLoaded, additionalEventsLoading } = UISlice.actions;

export default UISlice.reducer;
