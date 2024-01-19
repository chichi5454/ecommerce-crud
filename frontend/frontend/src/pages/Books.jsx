/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  // go to update
  // const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching all books...");
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log("Books data:", res.data); // Log the fetched data
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  // delete button
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // update button
  // const handleUpdate = async (id) => {
  //   navigate("/update");
  // };

  return (
    <div className="books-page">
      <h1>Book Club Group</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="/" />}
            <h4>{book.title}</h4>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              {" "}
              <Link to={`/update/${book.id}`}> Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
