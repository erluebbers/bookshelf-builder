import { useState } from 'react';
import './Search.css';


function SearchContainer() {
  const [authorName, setAuthorName] = useState({})

  const handleSubmit = () => {
    console.log()
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