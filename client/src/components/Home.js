import '../App.css';
import React from "react";
import BooksContainer from '../features/books/BooksContainer';
import ListsContainer from '../features/lists/ListsContainer'



function Home() {
  
  return (
    <div>
      <div>
        THIS IS WHERE THE WELCOME/BIO WILL GO
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