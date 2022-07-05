import '../App.css';
import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/users/userSlice";


function NavBar( {setIsLoggedIn} ) {
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        dispatch(deleteUser());
      }
    });
    setIsLoggedIn(false)
  }
  
  
  
  return (
  <div>
    <div>
      <h2>Bookshelf Builder</h2> 
    </div>
    <div className='navbar'>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/user">My Profile</Link>
      </nav>
      <button onClick={handleLogoutClick} className='logout-button'>Logout</button>
    </div>
  </div>
  )
} 


export default NavBar;