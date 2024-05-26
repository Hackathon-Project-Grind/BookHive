import React from 'react';
import './Books.css';

const Books = () => {
  const books = [
    { title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: 2015 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Effective Java', author: 'Joshua Bloch', year: 2018 },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt and David Thomas', year: 1999 },
  ];

  return (
    <div className="books-container">
      {books.map((book, index) => (
        <div className="books-card" key={index}>
          <h2 className="books-title">{book.title}</h2>
          <p className="books-author">Author: {book.author}</p>
         
          <p className="books-year">Year: {book.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
