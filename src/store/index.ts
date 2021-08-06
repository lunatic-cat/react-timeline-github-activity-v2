import { configureStore } from '@reduxjs/toolkit';
import { camelizeKeys } from 'humps';
import ky from 'ky';

import { GithubTeamMember } from 'utils/types';

import data from './slices/data';
import users, { teamMembersFetched } from './slices/users';

export const store = configureStore({
  reducer: {
    data,
    users,
  },
});

export const fetchMembers = async (teamName: string) => {
  const teamMembers = await ky.get(`https://api.github.com/orgs/${teamName}/members`).json<GithubTeamMember[]>();

  store.dispatch(teamMembersFetched(camelizeKeys(teamMembers) as GithubTeamMember[]));
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
