import { createSlice, original, PayloadAction } from '@reduxjs/toolkit';

import { sortEventsByDatetime } from 'utils';
import { EventsByUserName, GithubEvent } from 'utils/types';

type EventsState = {
  eventsSortedByDatetime: GithubEvent[];
  eventsByUserName: EventsByUserName;
};

const initialState: EventsState = {
  eventsSortedByDatetime: [],
  eventsByUserName: {},
};

export const eventsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    userEventsLoaded: (
      state,
      action: PayloadAction<{ events: GithubEvent[]; userName: string }>,
    ) => ({
      ...state,
      eventsByUserName: {
        ...state.eventsByUserName,
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
      },
    }),
    allEventsLoaded: (state) => {
      const eventsSortedByDatetime = sortEventsByDatetime(original(state.eventsByUserName) || {});

      return {
        ...state,
        eventsSortedByDatetime,
      };
    },
  },
});

export const { userEventsLoaded, allEventsLoaded } = eventsSlice.actions;

export default eventsSlice.reducer;
