import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import pick from 'lodash/pick';

import { EventsByUserName, GithubEvent } from 'utils/types';

import { allEventsLoaded } from './ui';

type EventsState = {
  events: EventsByUserName;
  page: number;
};

const initialState: EventsState = {
  events: {},
  page: 1,
};

const parseGithubEvents = (events: GithubEvent[]): GithubEvent[] => (
  events.map((event) => (pick(event, ['createdAt', 'payload', 'repo', 'type'])))
);

export const eventsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    userEventsLoaded: (
      state,
      action: PayloadAction<{ events: GithubEvent[]; userName: string }>,
    ) => ({
      ...state,
      events: {
        ...state.events,
        [action.payload.userName]: [
          ...(state.events[action.payload.userName] || []),
          ...parseGithubEvents(action.payload.events),
        ],
      },
    }),
  },
  extraReducers: (builder) => (
    builder.addCase(allEventsLoaded, (state) => ({
      ...state, page: state.page + 1,
    }))
  ),
});

export const { userEventsLoaded } = eventsSlice.actions;

export default eventsSlice.reducer;
