import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GithubUser } from 'utils/types';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
  endpoints: (builder) => ({
    getEventsByUserLogin: builder.query<any, { login: string }>({
      query: ({ login }) => `/${login}/events?per_page=50`,
    }),
    getUserInfoByUserLogin: builder.query<GithubUser, { login: string }>({
      query: ({ login }) => `/${login}`,
    }),
  }),
});

export const { useGetEventsByUserLoginQuery, useGetUserInfoByUserLoginQuery } = usersApi;

export default usersApi;
