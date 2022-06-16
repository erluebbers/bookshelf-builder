import '../App.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addBooks } from '../features/books/booksSlice';



function NewBookForm() {
  const dispatch = useDispatch()
  const initialFormState = {
    title: "",
    author: "",
    genre: "",
    description: ""
  }
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.users.selectedUser)
  // const books = useSelector(state => state.books.items)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then(book => {
          const newBook = {
            title: book.title,
            id: book.id, 
            description: book.description,
            author: book.author,
            genre: book.genre,
          }
          dispatch(addBooks(newBook))
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData(initialFormState)
  }

  
  return (
    <div className='new-book'>
      <h3>Add a Book to My Books</h3>
      <form className='submit-new' onSubmit={handleSubmit}>

      <label>Title</label>
        <input
          type="text"
          placeholder='Enter title...'
          name="title"
          id="title"
          value={formData.title}
          onChange={e => handleChange(e)}
        /> 
        
        <label>Author</label>
        <input
          type="text"
          placeholder='Enter author...'
          name="author"
          id="author"
          value={formData.author}
          onChange={e => handleChange(e)}
        /> 

        <label>Genre</label>
        <input
          type="text"
          placeholder='Enter genre...'
          name="genre"
          id="genre"
          value={formData.genre}
          onChange={e => handleChange(e)}
        /> 

        <label>Description</label>
        <input
          type="textarea"
          placeholder='Enter description...'
          name="description"
          id="description"
          value={formData.description}
          onChange={(e) => handleChange(e)}
        /> 

        <button className='button' type="submit">Add Book</button> <br />

        <div>
          {errors}
        </div>
    </form>
    </div>
  );
}

export default NewBookForm;