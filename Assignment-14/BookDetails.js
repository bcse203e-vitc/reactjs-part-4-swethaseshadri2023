import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const foundBook = savedBooks.find((b) => b.id === parseInt(id));
    setBook(foundBook);
  }, [id]);

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Availability:</strong> {book.available ? "In Stock" : "Out of Stock"}</p>
      <button onClick={() => setAddedToCart(true)} disabled={addedToCart}>
        {addedToCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
      </button>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default BookDetails;
