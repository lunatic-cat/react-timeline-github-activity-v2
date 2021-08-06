import { configureStore } from '@reduxjs/toolkit';

import data from './slices/data';
import users from './slices/users';

export const store = configureStore({
  reducer: {
    data,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
