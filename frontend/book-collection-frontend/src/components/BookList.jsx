import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book._id} className="bg-white shadow p-4 rounded">
            <strong className="text-lg">{book.title}</strong>
            <span className="text-gray-600 ml-2">by {book.author}</span>
            <div className="mt-2">
              <Link
                to={`/edit/${book._id}`}
                className="text-blue-500 hover:underline mr-4"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteBook(book._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;