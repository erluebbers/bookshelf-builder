import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ManageBooks from "./components/ManageBooks";
import ExploreLists from "./components/ExploreLists";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./features/users/Login";
import { setUser } from './features/users/userSlice';
import { loadBooks } from './features/books/booksSlice'
import { loadLists } from './features/lists/listsSlice';
import SearchContainer from './features/search/SearchContainer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()
  // const lists = useSelector(state => state.lists.collections)
  // const user = useSelector(state => state.users.selectedUser)



  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(setUser(user))
          dispatch(loadBooks(user.books))
          setIsLoggedIn(true)
        });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    fetch(`/lists`)
      .then(r => r.json())
      .then(lists => dispatch(loadLists(lists)))
  }, [dispatch])

  
  if (!isLoggedIn) return <Login setIsLoggedIn={setIsLoggedIn}/>;

  return (
    <div className='app'>
      <NavBar setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/books" element={<ManageBooks />} />
        <Route exact path="/lists" element={<ExploreLists />} />
        <Route exact path="/search" element={<SearchContainer />} />
      </Routes> 
    </div>
  );
}

export default App;
