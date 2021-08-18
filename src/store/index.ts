import { configureStore } from '@reduxjs/toolkit';
import { camelizeKeys } from 'humps';
import ky from 'ky';

import { GithubEvent, GithubTeamMember, GithubUser } from 'utils/types';

import events, { userEventsLoaded } from './slices/events';
import users, { teamMembersFetched, userInfoFetched } from './slices/users';
import ui, { allEventsLoaded } from './slices/ui';

export const store = configureStore({
  reducer: {
    events,
    users,
    ui,
  },
});

const fetchUserEvents = async (login: string): Promise<void> => {
  const userEvents = camelizeKeys(
    await ky.get(`https://api.github.com/users/${login}/events?per_page=20`).json(),
  ) as GithubEvent[];

  store.dispatch(userEventsLoaded({ events: userEvents, userName: login }));
};

const fetchUserName = async (login: string): Promise<void> => {
  const userInfo = camelizeKeys(
    await ky.get(`https://api.github.com/users/${login}`).json<GithubUser>(),
  ) as GithubUser;

  store.dispatch(userInfoFetched({ name: userInfo.name, login }));
};

export const fetchMembers = async (teamName: string): Promise<void> => {
  const teamMembers = camelizeKeys(
    await ky.get(`https://api.github.com/orgs/${teamName}/members`).json(),
  ) as GithubTeamMember[];

  store.dispatch(teamMembersFetched(camelizeKeys(teamMembers) as GithubTeamMember[]));

  await Promise.all(
    teamMembers.map((user) => fetchUserName(user.login)),
  ).catch(() => { });

  Promise.all(
    teamMembers.map((user) => fetchUserEvents(user.login)),
  )
    .then(() => store.dispatch(allEventsLoaded()))
    .catch(() => { });
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
