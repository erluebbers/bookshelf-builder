import '../App.css';
import React from "react";
import NewBookForm from "./NewBookForm"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBookDescription } from '../features/books/booksSlice';
import BooksContainer from '../features/books/BooksContainer';



function ManageBooks() {
  const dispatch = useDispatch()
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [selectedTitle, setSelectedTitle] = useState(null)
  const books = useSelector(state => state.books.items)
  const user = useSelector(state => state.users.selectedUser)


  const bookDropdown = books.map(book => {
    return <option key={book.id}>{book.title}</option>
  })


  const handleUpdate = (e, selectedTitle) => {
    e.preventDefault()
    const selectedBook = books.find(book => book.title === selectedTitle)
    fetch(`/users/${user.id}/books/${selectedBook.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: selectedBook.title,
        author: selectedBook.author,
        genre: selectedBook.genre,
        description: descriptionEdit,
      })
    })
    .then(r => r.json())
    .then(book => dispatch(updateBookDescription(book)))
  }

 
  return (
    <div>
      <NewBookForm />
      <div className='new-book'>
        <h3>Edit your book descriptions:</h3>
        <form onSubmit={(e) => handleUpdate(e, selectedTitle)} className='submit-new'>

          <select onChange={(e) => setSelectedTitle(e.target.value)}>
            <option>Select a Book to Edit</option>
            {bookDropdown}
          </select>

          <input
            type="textarea"
            placeholder='Enter edited description...'
            name="description"
            id="description"
            value={descriptionEdit}
            onChange={(e) => setDescriptionEdit(e.target.value)}
          >
          </input>

          <button className='button' type="submit">Edit Book</button> <br />
        </form>
      </div>
      <BooksContainer />
    </div>
  );
}

export default ManageBooks;