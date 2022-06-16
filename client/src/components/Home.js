import '../App.css';
import React from "react";
import BooksContainer from '../features/books/BooksContainer';
import ListsContainer from '../features/lists/ListsContainer'



function Home() {
  
  return (
    <div>
      <div>
        <h4> Welcome to Bookshelf Builder where you can keep track of your own favorite books and collaboratively build booklists of your favorite books with other users. </h4>
      </div>
      <div>
        <BooksContainer />
      </div>
      <div>
        <ListsContainer />
      </div>
    </div>
  );
}

export default Home;