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
        <Link to="/home">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/search">Search</Link>
      </nav>
      <button 
        onClick={handleLogoutClick} 
        className='button'
        style={{"backgroundColor": "#E27D61", "box-shadow": "0 1px #BF5035"}}
        >
          Logout
        </button>
    </div>
  </div>
  )
} 


export default NavBar;