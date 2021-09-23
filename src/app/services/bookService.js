import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookServices = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => {
        return {
          url: "books",
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetBooksQuery } = bookServices;
