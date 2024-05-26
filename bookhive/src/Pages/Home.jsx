import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([
    { id: 1, title: 'python', author: 'Author 1', year: 2021, owner: 'Owner 1', requested: false },
    { id: 2, title: 'Ruby&Rail', author: 'Author 2', year: 2022, owner: 'Owner 2', requested: false },
    { id: 3, title: 'Javascript', author: 'Author 3', year: 1991, owner: 'Owner 1', requested: false },
    { id: 4, title: 'Java', author: 'Author 4', year: 1962, owner: 'Owner 2', requested: false },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRequest = (id) => {
    // Update the requested status of the book
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, requested: true } : book
    );
    setBooks(updatedBooks);
  };

  const uniqueFilteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Welcome to our Book Collection</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="book-list">
        {uniqueFilteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Year: {book.year}</p>
              <p>Owner: {book.owner}</p>
            </div>
            <button
              className="request-button"
              onClick={() => handleRequest(book.id)}
              disabled={book.requested} // Disable the button if the book is already requested
            >
              {book.requested ? 'Requested' : 'Request'}
            </button>
          </div>
        ))}
        {uniqueFilteredBooks.length === 0 && searchTerm && (
          <p>No book found with the title '{searchTerm}'</p>
        )}
      </div>
    </div>
  );
};

export default Home;
