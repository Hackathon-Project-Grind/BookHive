// Home.jsx
import React, { useState } from 'react';

import './Home.css';
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2021, owner: 'Owner 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2022, owner: 'Owner 2' },
    { id: 1, title: 'Book 3', author: 'Author 3', year: 1991, owner: 'Owner 1' },
    { id: 2, title: 'Book 4', author: 'Author 4', year: 1962, owner: 'Owner 2' },
    // Add more book data as needed
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRequest = (id) => {
    // Implement request handling logic here
    console.log(`Requesting book with ID ${id}`);
  };

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
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-details">
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Year: {book.year}</p>
              <p>Owner: {book.owner}</p>
            </div>
            <button className="request-button" onClick={() => handleRequest(book.id)}>Request</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
