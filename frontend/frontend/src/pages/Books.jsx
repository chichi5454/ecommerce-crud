/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Book Club Group</h1>
      {books.map((book) => (
        <div className="book" key={book.id}>
          {book.cover && <img src={book.cover} alt="/" />}
          <h2>{book.title}</h2>
          <h2>{book.desc}</h2>
          {/* <span>{book.price}</span>{" "} */}
          {/* Assuming 'price' is the correct property name */}
        </div>
      ))}
    </div>
  );
};

export default Books;
