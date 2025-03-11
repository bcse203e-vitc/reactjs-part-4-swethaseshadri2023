import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !price.trim() || !description.trim()) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      price,
      description,
      available: true,
    };

    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const updatedBooks = [...savedBooks, newBook];
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    addBook(newBook);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBook;
