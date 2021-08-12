import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GithubTeamMember, GithubUser } from 'utils/types';

type UsersState = (GithubTeamMember & GithubUser)[];

const initialState: UsersState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    teamMembersFetched: (state, action: PayloadAction<GithubTeamMember[]>) => (
      action.payload.map(({ login, htmlUrl, avatarUrl }) => ({
        login,
        htmlUrl,
        avatarUrl,
        name: '',
      }))
    ),
    userInfoFetched: (state, action: PayloadAction<GithubUser & { login: string }>) => {
      const user = state.find((item) => item.login === action.payload.login);

      if (user) user.name = action.payload.name;
    },
  },
});

export const { teamMembersFetched, userInfoFetched } = usersSlice.actions;

export default usersSlice.reducer;
