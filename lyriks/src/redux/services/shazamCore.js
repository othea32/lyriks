import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
   baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
   prepareHeaders: (headers) => {
     headers.set('X-RapidAPI-Key', 'b3bba30511msh80ffed710a78756p1d1e47jsn96720ac6ff3d');

     return headers;
   },
 }),
 endpoints: (builder) => ({
   getTopCharts: builder.query({ query: () => '/charts/world' }),
 }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;