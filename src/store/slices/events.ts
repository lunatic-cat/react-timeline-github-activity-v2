import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EventsByUserName, GithubEvent } from 'utils/types';

type EventsState = EventsByUserName;

const initialState: EventsState = {};

export const eventsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    userEventsLoaded: (
      state,
      action: PayloadAction<{ events: GithubEvent[]; userName: string }>,
    ) => ({
      ...state,
      [action.payload.userName]: action.payload.events.map(({
        createdAt, payload, repo, type,
      }) => {
        const event: GithubEvent = {
          createdAt,
          payload,
          repo,
          type,
        };

        return event;
      }),
    }),
  },
});

export const { userEventsLoaded } = eventsSlice.actions;

export default eventsSlice.reducer;
