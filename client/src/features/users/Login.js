import '../../App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { Navigate } from 'react-router-dom';
import { setUser } from "./userSlice";
import { loadBooks } from "../books/booksSlice"
import { useDispatch } from 'react-redux';



function Login( {setIsLoggedIn} ) {
  const [existingUser, setExistingUser] = useState(true)
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch()


  const setUserValue = () => {
    setExistingUser(!existingUser)
  }

  const handleDemo = () => {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "demo", password: "demo" })
    }).then(r => {
      if (r.ok) {
        r.json().then(user => {
          dispatch(setUser(user))
          dispatch(loadBooks(user.books))
          setIsLoggedIn(true)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    });
    setErrors([]);
    <Navigate replace to="/"/>;
  }


  return (
    <div>
      <div className='header'>
        <h1>Bookshelf Builder</h1> <button className='demo-button' onClick={handleDemo}>DEMO THIS SITE</button>
      </div>
      <div className='login'>
        {existingUser ? <LoginForm setIsLoggedIn={setIsLoggedIn}/> : <SignupForm setUserValue={setUserValue}/>}
      </div>
      <div className='footer'>
        <label htmlFor="signup"> {existingUser ? "Don't have an account? Sign up here:" : null} </label>
        <button className="button" onClick={setUserValue}> {existingUser ? "Create an account" : "Back to Login"}</button>
      </div>
      {errors}
    </div>
  );
}

export default Login;