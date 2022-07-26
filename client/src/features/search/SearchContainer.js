import { useState } from 'react';
import './Search.css';


function SearchContainer() {
  const [authorName, setAuthorName] = useState("")
  const [openLibraryData, setOpenLibraryData] = useState({})

  const handleSubmit = () => {
    fetch(`https://openlibrary.org/search/authors.json?q=${authorName}`)
      .then(r => r.json())
      .then(data => setOpenLibraryData(data))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='author'>Search by author name</label>
        <input
          type="text"
          id="author"
          placeholder="Enter Author Name.."
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        >
        </input>
        <button className='button' type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchContainer;