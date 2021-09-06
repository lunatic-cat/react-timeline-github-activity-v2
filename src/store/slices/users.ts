import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GithubTeamMember, GithubUser, UserType } from 'utils/types';

type UsersState = UserType[];

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
        isAllEventsLoaded: false,
      }))
    ),
    userInfoFetched: (state, action: PayloadAction<GithubUser & { login: string }>) => {
      const user = state.find((item) => item.login === action.payload.login);

      if (user) user.name = action.payload.name;
    },
    allUserEventsLoaded: (state, action: PayloadAction<{ login: string }>) => {
      const user = state.find((item) => item.login === action.payload.login);

      if (user) user.isAllEventsLoaded = true;
    },
  },
});

export const { teamMembersFetched, userInfoFetched, allUserEventsLoaded } = usersSlice.actions;

export default usersSlice.reducer;
