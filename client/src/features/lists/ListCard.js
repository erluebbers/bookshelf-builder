import '../../App.css';
import { useSelector } from 'react-redux';


function ListCard( { list } ) {
  const { creator, description, genre, id, title, books } = list

  const titleList = books.map(book => {
    return <li key={book.id}>{book.title} by {book.author}</li>
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
    </div>
  );
}

export default ListCard;