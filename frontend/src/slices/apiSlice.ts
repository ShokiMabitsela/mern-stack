import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// Define the base query for your API
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// API Slice with endpoint definitions
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User'], // Tag types for cache management
  endpoints: (builder) => ({
    // Example endpoint for user login
    loginUser: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      providesTags: (result, error, arg) =>
        result ? [{ type: 'User', id: result.user._id }] : [],
    }),

    // Example endpoint for user registration
    registerUser: builder.mutation<any, { name: string; email: string; password: string }>({
      query: (user) => ({
        url: '/auth/register',
        method: 'POST',
        body: user,
      }),
      providesTags: (result, error, arg) =>
        result ? [{ type: 'User', id: result.user._id }] : [],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = apiSlice;
