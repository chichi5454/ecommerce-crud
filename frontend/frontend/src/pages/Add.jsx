/** @format */

// Add.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  // if everything is okey, navigate to homepage
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add.jsx
  const handleClick = async (e) => {
    e.preventDefault();
    // Convert price to a number
    const priceAsNumber = parseFloat(book.price);
    const bookData = { ...book, price: priceAsNumber };
    console.log("Adding book:", bookData);
    try {
      const response = await axios.post(
        "http://localhost:8800/books",
        bookData
      );
      console.log("Response after adding:", response.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <div className="form-add">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
