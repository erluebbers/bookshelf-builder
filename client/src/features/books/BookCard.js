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
  const [targetList, setTargetList] = useState({})
  const dispatch = useDispatch()

  const listTitles = lists.map(list => {
    return <option key={list.id}>{list.title}</option>
  })

  const handleAdd = () => {
    if (targetList.books.find(title => title)) {
      alert("This book is already on this list")
    } else {
      fetch(`/booklists`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({list_id: targetList.id, book_id: id}),
      })
      .then(r => r.json())
      .then(booklist => dispatch(updateLists(booklist)))
    }
  }

  const getList = (e) => {
    const list = lists.find(list => list.title === e.target.value)
    setTargetList(list)
  }


  const handleDelete = () => {
    fetch(`/users/${user.id}/books/${id}`,{
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
    })
      .then(() => dispatch(deleteBooks(id)))
  }
  
  return (
    <div className="bookcard">
      <h3>{title}</h3>
      <p>by {author}</p> <br />
      <p>Genre: {genre}</p>
      <p>Description: {description}</p> <br />
      <button onClick={handleDelete}>Delete from My Books</button>
      <div>
        <select onChange={(e) => getList(e)}>
          <option>Add this book to a list</option>
          {listTitles}
        </select>
        <button onClick={() => handleAdd()}>Add to List</button>
      </div>
    </div>
  );
}

export default BookCard;