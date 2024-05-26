import React, { useState } from 'react';
import './List.css'
const List = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Year: ${year}`);
  };

  return (
    <div className="container">
      <h1>Welcome Back, User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Enter Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Placeholder"
          />
        </div>
        <div>
          <label htmlFor="author">Enter Author's Name:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Placeholder"
          />
        </div>
        <div>
          <label htmlFor="year">Enter Year of Publishing:</label>
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Placeholder"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default List;