import './App.css';
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ManageBooks from "./components/ManageBooks";
import ExploreLists from "./components/ExploreLists";
import { useDispatch, useSelector  } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./features/users/Login";
import { setUser } from './features/users/userSlice';
import { loadBooks } from './features/books/booksSlice'
import { loadLists } from './features/lists/listsSlice';

function App() {
  const user = useSelector(state => state.users.selectedUser)
  // const lists = useSelector(state => state.lists.collections)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(setUser(user))
          dispatch(loadBooks(user.books))
        });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    fetch(`/lists`)
      .then(r => r.json())
      .then(lists => dispatch(loadLists(lists)))
  }, [dispatch])

  
  if (Object.keys(user).length === 0) return <Login />;

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/books" element={<ManageBooks />}/>
        <Route exact path="/lists" element={<ExploreLists />} />
      </Routes>
    </div>
  );
}

export default App;
