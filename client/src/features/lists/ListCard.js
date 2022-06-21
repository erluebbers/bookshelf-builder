import '../../App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBooks } from '../books/booksSlice';


function ListCard( { list } ) {
  const { creator, description, genre, title, books } = list //id
  const user = useSelector(state => state.users.selectedUser)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([]);


  const handleAddFromList = (event) => {
    const selectedBook = books.find(book => book.title === event.target.text)
    if (user.books.find((book) => book.title === selectedBook.title)) {
      alert("This Book is already on your list!")
    } else {
      fetch(`/users/${user.id}/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: selectedBook.title,
          description: selectedBook.description,
          author: selectedBook.author,
          genre: selectedBook.genre
        }),
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
    }
  }

  const titleList = books.map(book => {
    return <li className='list-link' key={book.id}><button onClick={handleAddFromList}>{book.title}</button> by {book.author}</li>
  })

  return (
    <div className='listcard'>
      <h3>{title}</h3>
      <span>Genre:</span><p>{genre}</p>
      <span>Created by:</span><p>{creator}</p>
      <br />
      <span>Description:</span><p>{description}</p>
      <span>Books:</span>
      <ul>
        {books.length >= 1 ? titleList : <li>Add books to build this list!</li>}
      </ul>
      <div>
        {errors}
      </div>
    </div>
  );
}

export default ListCard;