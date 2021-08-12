import values from 'lodash/values';
import flatten from 'lodash/flatten';
import { compareDesc } from 'date-fns';

import { EventsByUserName, GithubEvent } from './types';

export const getTeamName = (): string | null => {
  const { pathname } = window.location;

  return pathname ? pathname.replace('/', '') : null;
};

export const sortEventsByDatetime = (eventsByUserName: EventsByUserName): GithubEvent[] => {
  const events = flatten(values(eventsByUserName));
  const sortedEventByDatetime: GithubEvent[] = events.sort(
    (firstEvent, secondEvent) => compareDesc(
      new Date(firstEvent.createdAt),
      new Date(secondEvent.createdAt),
    ),
  );

  return sortedEventByDatetime;
};
