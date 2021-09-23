import React from "react";
import { useGetBooksQuery } from "../app/services/bookService";
const Books = () => {
  const { data = [], isLoading, isError } = useGetBooksQuery();
  if (isLoading)
    return (
      <div className="container">
        <h1>Loading</h1>
      </div>
    );
  return (
    <div className="container">
      {data.map((book) => (
        <div className="list" key={book.id}>
          <div className="list--name">
            <span>name</span>
            {book.name}
          </div>
          <div className="list--author">
            <span>author</span>
            {book.author}
          </div>
          <div className="list--button">
            <button>Delete Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
