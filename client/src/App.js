import './App.css';
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FindBooks from "./components/FindBooks";
import ExploreLists from "./components/ExploreLists";
import { useDispatch, useSelector  } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./features/users/Login";
import { setUser } from './features/users/userSlice';
import { loadBooks } from './features/books/booksSlice'

function App() {
  const user = useSelector(state => state.users.selectedUser)
  const dispatch = useDispatch()

  console.log("User:", user)

  //Auto-Login and fetch if there is a user session active
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(setUser(user))
          console.log("books:", user.books)
          dispatch(loadBooks(user.books))
        });
      }
    });
  }, [dispatch]);


  
  if (Object.keys(user).length === 0) return <Login />;

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/books" element={<FindBooks />}/>
        <Route exact path="/lists" element={<ExploreLists />} />
      </Routes>
    </div>
  );
}

export default App;



  //Auto-Login and fetch if there is a user session active
  // useEffect(() => {
  //   dispatch(fetchUser)
  // }, [dispatch])


  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => dispatch(fetchUser(user)));
  //     }
  //   });
  // }, []);