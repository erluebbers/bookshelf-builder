// import '../App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


function Login() {
  const [existingUser, setExistingUser] = useState(true)

  const setUserValue = () => {
    setExistingUser(!existingUser)
  }


  return (
    <div>
      <h1>Bookshelf Builder</h1>
        {existingUser ? <LoginForm /> : <SignupForm />}
      <label htmlFor="signup"> {existingUser ? "Don't have an account? Sign up Here" : null} </label>
      <button onClick={setUserValue}> {existingUser ? "Create an account" : "Back to Login"}</button>
    </div>
  );
}

export default Login;