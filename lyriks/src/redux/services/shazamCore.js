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
  getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
  getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
  getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
  getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
  getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
 }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;