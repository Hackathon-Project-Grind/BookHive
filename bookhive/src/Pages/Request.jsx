import React from 'react';

const BookRequest = ({ username, bookTitle }) => {
  return (
    <div className="book-request">
      <h1>Welcome Back, {username}</h1>
      <div className="request-panel">
        <p>{username} has requested the book:</p>
        <p>{bookTitle}</p>
        <button className="accept-button">Accept</button>
        <button className="deny-button">Deny</button>
      </div>
    </div>
  );
};

export default BookRequest;
