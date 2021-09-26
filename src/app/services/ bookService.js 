import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookService = createApi({
  reducerPath: "books",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const {
        authSlice: { token },
      } = getState();
      console.log("states: ", token);
      headers.set("authorization", token ? token : "");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "books",
        method: "GET",
      }),
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: "books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    userLogin: builder.mutation({
      query: (user) => {
        console.log("user login: ", user);
        return {};
      },
    }),
  }),
});
export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUserLoginMutation,
} = bookService;
