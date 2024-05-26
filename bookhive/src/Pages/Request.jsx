import React from 'react';
import './Request.css'; // assuming the CSS is in a separate file

function BookRequestCard() {
  return (
    <div className="container">
        <h1 className="title">Welcome Back, User</h1>
      <div className="card">
        <p className="content">UserXXX has Requested the book</p>
        <div className="buttons">
          <button className="accept">Accept</button>
          <button className="deny">Deny</button>
        </div>
      </div>
      <div className="card">
        <p className="content">UserXXX has Requested the book</p>
        <div className="buttons">
          <button className="accept">Accept</button>
          <button className="deny">Deny</button>
        </div>
      </div>
      <div className="card">
        <p className="content">UserXXX has Requested the book</p>
        <div className="buttons">
          <button className="accept">Accept</button>
          <button className="deny">Deny</button>
        </div>
      </div>
    </div>
  );
}

export default BookRequestCard;