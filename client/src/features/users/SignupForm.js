import '../../App.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux"



function Signup() {

  const initialFormState = {
    username: "",
    name: "",
    location: "",
    password: "",
    passwordConfirmation: "",
  }
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState(initialFormState)
  
  const dispatch = useDispatch()

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: formData.username,
        name: formData.name,
        location: formData.location,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(console.log((formData)));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData(initialFormState)
  }


  return (
    <div className='form-container'>

      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>

      <label>Name</label>
        <input
          type="text"
          placeholder='Enter name...'
          name="name"
          id="name"
          value={formData.name}
          onChange={e => handleChange(e)}
        /> <br />
        
        <label>Username</label>
        <input
          type="text"
          placeholder='Enter username...'
          name="username"
          id="username"
          value={formData.username}
          onChange={e => handleChange(e)}
        /> <br />

        <label>Password</label>
        <input
          type="password"
          placeholder='Enter password...'
          name="password"
          id="password"
          value={formData.password}
          onChange={e => handleChange(e)}
        /> <br />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder='Enter password again...'
          name="passwordConfirmation"
          id="password_confirmation"
          value={formData.passwordConfirmation}
          onChange={(e) => handleChange(e)}
        /> <br />

        <label>Location</label>
        <input
          type="text"
          placeholder='Enter location...'
          id="location"
          name="location"
          value={formData.location}
          onChange={e => handleChange(e)}
        /> <br />

        <button className='button' type="submit">Sign Up</button> <br />

        <div>
          {errors}
        </div>
    </form>
    </div>
  );
}

export default Signup;