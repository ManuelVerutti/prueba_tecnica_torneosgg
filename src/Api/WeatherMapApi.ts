import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "a65b5fd24a9d9ca4df20159e4c44bd29"

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (builder) => ({
      getCityByName: builder.query({
          query: (name) => `weather?q=${name}&appid=${apiKey}`,
      }),
    }),
  })
