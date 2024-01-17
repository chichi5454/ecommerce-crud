/** @format */

import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// connect to mysql database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Chichi5454$",
  database: "test",
});

// prevent error when client is sending data/adding item
app.use(express.json());
app.use(cors());

// reaching the backend server
app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

// endpoint books to return all books in our database; hence we need an sql query
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// create another book
app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES(?)";
  const values = [
    "title from backend",
    "description from backend",
    "cover from backend",
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// initial
app.listen(8800, () => {
  console.log("connected to backend!1");
});
