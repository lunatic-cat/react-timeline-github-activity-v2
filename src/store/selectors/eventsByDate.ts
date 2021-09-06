import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { sortEventsByDatetime } from 'utils';

const eventsSelector = (state: RootState) => state.events.events;
const isAllEventsFetchedSelector = (state: RootState) => state.ui.isAllEventsLoaded;

const getEventsByName = createSelector(
  eventsSelector,
  isAllEventsFetchedSelector,
  (eventsByUserName, isAllEventsFetched) => (
    isAllEventsFetched
      ? sortEventsByDatetime(eventsByUserName)
      : null
  ),
);

export default getEventsByName;
