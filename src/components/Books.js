import React from "react";
import { useGetBooksQuery } from "../app/services/bookService";
const Books = () => {
  const res = useGetBooksQuery();
  console.log(JSON.stringify(res.data));
  return <div>books</div>;
};

export default Books;
