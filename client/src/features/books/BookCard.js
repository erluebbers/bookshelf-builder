import '../../App.css';
import React from "react";


function BookCard( {book} ) {
  const {author, description, genre, title} = book
  
  return (
    <div className='bookcard'>
      <h3>{title}</h3>
      <p>by {author}</p>
    </div>
  );
}

export default BookCard;