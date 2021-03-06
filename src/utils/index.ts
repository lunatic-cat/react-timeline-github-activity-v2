import values from 'lodash/values';
import flatten from 'lodash/flatten';
import { compareDesc, format } from 'date-fns';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';

import { fetchAllUserEvents } from 'store';
import { isTwoColumns } from 'consts';

import {
  DateType,
  EventDescriptionType,
  EventsByUserName,
  GithubEvent,
  TimelineByDate,
  UserName,
  URL,
} from './types';

export const getTeamName = (): string | null => {
  const { pathname } = window.location;

  return pathname ? pathname.replace('/', '') : null;
};

// 2021-08-05T08:35:03Z -> 2021-08-05
export const formatDate = (date: string): string => format(new Date(date), 'yyyy-MM-dd');

export const getTimelinePointInfoByDate = (
  stringDate: string,
  dateFormat: string,
): { dayOfTheWeek: string; date: string } => {
  const dayOfTheWeek = format(new Date(stringDate), 'EEEE');
  const date = format(new Date(stringDate), dateFormat);

  return { dayOfTheWeek, date };
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
    const date = formatDate(value.createdAt);
    const { author } = value;

    if (!eventsByDate[date]) eventsByDate[date] = {};

    if (!eventsByDate[date][author]) eventsByDate[date][author] = [];

    eventsByDate[date][author].push(omit(value, 'author'));
  });

  return values(eventsByDate);
};

export const parseGithubRepoInfo = (repoInfo: { name: string, url: string }): URL => {
  let { name } = repoInfo;
  const href = `https://github.com/${name}`;

  if (isTwoColumns()) [, name] = name.split('/');

  return { name, href };
};

export const formatToPlural = (nonPluralText: string): string => {
  if (nonPluralText.includes('a new commit')) return nonPluralText.replace('a new commit', 'new commits');

  if (nonPluralText.includes('a new branch')) return nonPluralText.replace('a new branch', 'new branches');

  if (nonPluralText.includes('a branch')) return nonPluralText.replace('a branch', 'several branches');

  if (nonPluralText.includes('a new repository')) return nonPluralText.replace('a new repository', 'new repositories');

  if (nonPluralText.includes('the repository')) return nonPluralText.replace('the repository', 'the repositories');

  if (nonPluralText.includes('a comment')) return nonPluralText.replace('a comment', 'comments');

  return nonPluralText;
};

export const groupSameEvents = (events: EventDescriptionType[]): EventDescriptionType[] => {
  if (events.length === 1) return events;

  const groupedEvents: EventDescriptionType[] = [];

  events.forEach((event) => {
    const sameEvent = groupedEvents.find((groupedEvent) => (
      isEqual(groupedEvent.title, event.title)
    ));

    if (!sameEvent) groupedEvents.push(event);

    if (sameEvent?.body) sameEvent.body = [...sameEvent.body, ...event.body];
  });

  return groupedEvents.map((event) => ({
    ...event,
    title: {
      ...event.title,
      prefix: event.body.length > 1
        ? formatToPlural(event.title.prefix)
        : event.title.prefix,
    },
  }));
};

export const handleInfiniteScroll = (
  isLoaded: boolean,
  isAllAdditionalUserEventsLoaded: boolean,
): void => {
  const scrollPosition = Math.abs(document.documentElement.getBoundingClientRect().top)
    + document.documentElement.clientHeight;
  const { scrollHeight } = document.documentElement;
  const screenHeight = window.screen.height;

  if (!scrollHeight || scrollHeight === document.documentElement.clientHeight) return;

  if (
    isLoaded
    && !isAllAdditionalUserEventsLoaded
    && scrollPosition > scrollHeight - screenHeight
  ) fetchAllUserEvents().catch(() => null);
};
