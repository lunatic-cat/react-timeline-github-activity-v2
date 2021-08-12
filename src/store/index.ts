import { configureStore } from '@reduxjs/toolkit';
import { camelizeKeys } from 'humps';
import ky from 'ky';

import { GithubTeamMember, GithubUser } from 'utils/types';

import data from './slices/data';
import users, { teamMembersFetched, userInfoFetched } from './slices/users';

export const store = configureStore({
  reducer: {
    data,
    users,
  },
});

export const fetchUserName = async (login: string): Promise<void> => {
  const userInfo = await ky.get(`https://api.github.com/users/${login}`).json<GithubUser>();

  store.dispatch(userInfoFetched({ name: userInfo.name, login }));
};

export const fetchMembers = async (teamName: string): Promise<void> => {
  const teamMembers = await ky.get(`https://api.github.com/orgs/${teamName}/members`).json<GithubTeamMember[]>();

  store.dispatch(teamMembersFetched(camelizeKeys(teamMembers) as GithubTeamMember[]));

  Promise.all(
    teamMembers.map((user) => fetchUserName(user.login)),
  ).catch(() => {});
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
