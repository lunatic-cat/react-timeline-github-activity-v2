import { configureStore } from '@reduxjs/toolkit';
import { camelizeKeys } from 'humps';
import ky from 'ky';
import isEmpty from 'lodash/isEmpty';

import { GithubEvent, GithubTeamMember, GithubUser } from 'utils/types';

import events, { userEventsLoaded } from './slices/events';
import users, { allUserEventsLoaded, teamMembersFetched, userInfoFetched } from './slices/users';
import ui, { additionalEventsLoading, allEventsLoaded } from './slices/ui';

const apiHost = process.env.REACT_APP_GITHUB_API || '';

export const store = configureStore({
  reducer: {
    events,
    users,
    ui,
  },
});

const fetchUserEvents = async (login: string, page: number): Promise<void> => {
  const eventsPerPage = 100;

  const userEvents = camelizeKeys(
    await ky.get(`${apiHost}/users/${login}/events?per_page=${eventsPerPage}&page=${page}`).json(),
  ) as GithubEvent[];

  if (isEmpty(userEvents)) {
    store.dispatch(allUserEventsLoaded({ login }));

    return;
  }

  if (userEvents.length < eventsPerPage) store.dispatch(allUserEventsLoaded({ login }));

  store.dispatch(userEventsLoaded({ events: userEvents, userName: login }));
};

export const fetchAllUserEvents = async (): Promise<void> => {
  const { page } = store.getState().events;

  if (page > 1) store.dispatch(additionalEventsLoading());

  return (
    Promise.all(
      store
        .getState()
        .users.filter((user) => !user.isAllEventsLoaded)
        .map((user) => user.login)
        .map((login) => fetchUserEvents(login, page)),
    )
      .then(() => store.dispatch(allEventsLoaded()))
      .then(() => undefined) // FIXME
  );
};

const fetchUserName = async (login: string): Promise<void> => {
  const userInfo = camelizeKeys(
    await ky.get(`${apiHost}/users/${login}`).json<GithubUser>(),
  ) as GithubUser;

  store.dispatch(userInfoFetched({ name: userInfo.name, login }));
};

export const fetchMembers = async (teamName: string): Promise<void> => {
  const teamMembers = camelizeKeys(
    await ky.get(`${apiHost}/orgs/${teamName}/members`).json(),
  ) as GithubTeamMember[];

  store.dispatch(teamMembersFetched(camelizeKeys(teamMembers) as GithubTeamMember[]));

  await Promise.all(
    teamMembers.map((user) => fetchUserName(user.login)),
  ).catch(() => { });

  fetchAllUserEvents()
    .catch(() => { });
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
