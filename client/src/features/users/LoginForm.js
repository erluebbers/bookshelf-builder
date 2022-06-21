import '../../App.css';
import React, { useState } from "react";
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import { loadBooks } from "../books/booksSlice"


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }).then(r => {
      if (r.ok) {
        r.json().then(user => {
          dispatch(setUser(user))
          dispatch(loadBooks(user.books))
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
    setUsername("");
    setPassword("");
    <Navigate replace to="/"/>
  }


  return (
    <div>
      <h3>Log in</h3>
      <form onSubmit={handleSubmit} className='form-container'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
            <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <br />
          <button className='button' type="submit">Login</button>
      </form>
      {errors}
    </div>
  );
}

export default LoginForm;