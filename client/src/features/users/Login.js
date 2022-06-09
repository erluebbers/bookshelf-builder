import '../../App.css';
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
      <div className='header'>
        <h1>Bookshelf Builder</h1>
      </div>
      <div className='login'>
        {existingUser ? <LoginForm /> : <SignupForm />}
      </div>
      <div className='footer'>
        <label htmlFor="signup"> {existingUser ? "Don't have an account? Sign up here:" : null} </label>
        <button className="button" onClick={setUserValue}> {existingUser ? "Create an account" : "Back to Login"}</button>
      </div>
    </div>
  );
}

export default Login;