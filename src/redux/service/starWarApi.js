import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constant';

const starWarApiHeaders = () => ({
    'Content-Type': 'application/json',
});

const createQueryRequest = ({url,method}) => ({
    url:url,
    headers:starWarApiHeaders(),
    method:method
});


export const starWarApi = createApi({
    reducerPath: 'starWarApi',
    baseQuery: fetchBaseQuery({ baseUrl:BASE_URL}),
    endpoints: (builder) => ({
        fetchAllStarWarFilms: builder.query({
            query: () =>  createQueryRequest({url:`/api/films`,method:'GET'})
        }),
    }),
});


export const { 
    useFetchAllStarWarFilmsQuery,
} =  starWarApi;
