import '../App.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addLists } from '../features/lists/listsSlice';



function NewListForm() {
  const user = useSelector(state => state.users.selectedUser)
  const dispatch = useDispatch()
  const initialFormState = {
    title: "",
    creator: user.name,
    genre: "",
    description: ""
  }
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState([]);
  // const books = useSelector(state => state.books.items)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then(list => {
          const newList = {
            title: list.title,
            id: list.id, 
            description: list.description,
            creator: user.name,
            genre: list.genre,
            books: [],
          }
          dispatch(addLists(newList))
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData(initialFormState)
  }

  
  return (
    <div className='new-book'>
      <h3>Create a New List</h3>
      <form className='submit-new' onSubmit={(e) => handleSubmit(e)}>

      <label>Title</label>
        <input
          type="text"
          placeholder='Enter title...'
          name="title"
          id="title"
          value={formData.title}
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

        <button className='button' type="submit">Create List</button> <br />

        <div>
          {errors}
        </div>
    </form>
    </div>
  );
}

export default NewListForm;