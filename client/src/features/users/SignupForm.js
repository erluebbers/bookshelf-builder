import React, { useState } from "react";


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
      body: JSON.stringify({ formData }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(console.log("SOMETHING"));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    }).then(setFormData(initialFormState))
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

      <label>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(event) => handleChange(event)}
        />
        
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={(event) => handleChange(event)}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(event) => handleChange(event)}
        />

        <label>Password Confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          id="password_confirmation"
          value={formData.passwordConfirmation}
          onChange={(event) => handleChange(event)}
        />

        <label>Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={(event) => handleChange(event)}
        />

        <button type="submit">Sign Up</button>

        {errors}
    </form>
    </div>
  );
}

export default Signup;