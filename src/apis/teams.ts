import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GithubTeamMember } from 'utils/types';

const teamsApi = createApi({
  reducerPath: 'teamsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/orgs/' }),
  endpoints: (builder) => ({
    getMembersByTeamName: builder.query<GithubTeamMember[], { teamName: string }>({
      query: ({ teamName }) => `/${teamName}/members`,
    }),
  }),
});

export const { useGetMembersByTeamNameQuery } = teamsApi;

export default teamsApi;
