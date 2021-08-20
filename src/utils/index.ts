import values from 'lodash/values';
import flatten from 'lodash/flatten';
import { compareDesc, format } from 'date-fns';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';

import {
  DateType, EventsByUserName, GithubEvent, TimelineByDate, UserName,
} from './types';

export const getTeamName = (): string | null => {
  const { pathname } = window.location;

  return pathname ? pathname.replace('/', '') : null;
};

export const sortEventsByDatetime = (eventsByUserName: EventsByUserName): TimelineByDate => {
  const eventsByUserNameWithAuthors = mapValues(
    eventsByUserName,
    (value, key) => (
      value.map((event) => ({ ...event, author: key }))
    ),
  );
  const events = flatten(values(eventsByUserNameWithAuthors));
  const sortedEventByDatetime = events.sort(
    (firstEvent, secondEvent) => compareDesc(
      new Date(firstEvent.createdAt),
      new Date(secondEvent.createdAt),
    ),
  );

  const eventsByDate: Record<DateType, Record<UserName, GithubEvent[]>> = {};

  sortedEventByDatetime.forEach((value) => {
    const date = format(new Date(value.createdAt), 'yyyy-MM-dd');
    const { author } = value;

    if (!eventsByDate[date]) eventsByDate[date] = {};

    if (!eventsByDate[date][author]) eventsByDate[date][author] = [];

    eventsByDate[date][author].push(omit(value, 'author'));
  });

  return values(eventsByDate);
};
