import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GithubTeamMember, GithubUser } from 'utils/types';

type UsersState = (GithubTeamMember & GithubUser)[];

const initialState: UsersState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    teamMembersFetched: (state, action: PayloadAction<GithubTeamMember[]>) => {
      console.log(state, action);
    },
    userInfoFetched: (state, action: PayloadAction<GithubUser>) => {
      console.log(state, action);
    },
  },
});

export const { teamMembersFetched, userInfoFetched } = usersSlice.actions;

export default usersSlice.reducer;
