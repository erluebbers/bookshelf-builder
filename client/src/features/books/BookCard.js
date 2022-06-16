import '../../App.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { deleteBooks } from './booksSlice';
import { useState } from 'react';
import { updateLists } from '../lists/listsSlice';


function BookCard( {book} ) {
  const {author, description, genre, title, id} = book
  const user = useSelector(state => state.users.selectedUser)
  const lists = useSelector(state => state.lists.collections)
  const [listId, setListId] = useState(null)
  const dispatch = useDispatch()

  const listTitles = lists.map(list => {
    return <option>{list.title}</option>
  })

  const handleAdd = () => {
    fetch(`/users/${user.id}/booklists`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        book_id: id,
        list_id: listId,
      }),
    })
    .then(r => r.json())
    .then(list => dispatch(updateLists(list)))
  }

  const getListId = (e) => {
    const list = lists.find(list => list.title === e.target.value)
    setListId(list.id)
  }


  const handleDelete = (id) => {
    fetch(`/users/${user.id}/books/${id}`,{
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => dispatch(deleteBooks(id)))
  }
  
  return (
    <div className="bookcard">
      <h3>{title}</h3>
      <p>by {author}</p> <br />
      <p>Genre: {genre}</p>
      <p>Description: {description}</p> <br />
      <button onClick={() => handleDelete(id)}>Delete from My Books</button>
      <div>
        <select onChange={(e) => getListId(e)}>
          <option>Add this book to a list</option>
          {listTitles}
        </select>
        <button onClick={handleAdd}>Add to List</button>
      </div>
    </div>
  );
}

export default BookCard;