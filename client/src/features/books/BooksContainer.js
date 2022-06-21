import '../../App.css';
import React from "react";
import BookCard from "./BookCard"
import { useSelector } from "react-redux"



function BooksContainer() {
  const books = useSelector(state => state.books.items)

  const bookList = books.map(book => {
    return <BookCard book={book} key={book.id}/>
  })
  
  return (
    <div className='books-cont'>
      <h2>My Books:</h2>
      <div className='booklist'>
        {bookList}
      </div>
    </div>
  );
}

export default BooksContainer;