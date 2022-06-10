import '../App.css';
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom"


function NavBar() {

  function handleLogoutClick() {
    console.log("CLICK")
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
      </nav>
      <button onClick={handleLogoutClick} className='logout-button'>Logout</button>
    </div>
  </div>
  )
} 


export default NavBar;