import '../App.css';
import React from "react";
import NewListForm from "./NewListForm"
import ListsContainer from '../features/lists/ListsContainer';



function ExploreLists() {
  
  return (
    <div>
      <NewListForm />
      <ListsContainer />
    </div>
  );
}

export default ExploreLists;