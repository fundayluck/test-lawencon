import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
    endpoints: (builder) => ({
        getMovieList: builder.query({
            query: () => `?apikey=faf7e5bb&s=Batman&page=1`,
        }),
    }),
})

export const {
    useGetMovieListQuery
} = movieApi