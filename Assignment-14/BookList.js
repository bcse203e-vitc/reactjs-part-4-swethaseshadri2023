import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div>
      <h2>📖 Available Books</h2>
      <Link to="/add-book"><button>Add New Book</button></Link>
      {books.length === 0 ? <p>No books available</p> : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} - ${book.price}
              <Link to={`/books/${book.id}`}><button>View Details</button></Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
