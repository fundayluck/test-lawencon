import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
    endpoints: (builder) => ({
        getMovieList: builder.query({
            query: (params) => ({
                url: params
            }),
        }),
    }),
})
export const {
    useGetMovieListQuery
} = movieApi