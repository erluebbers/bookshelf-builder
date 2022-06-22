import '../App.css';
import React from "react";
import { useSelector } from 'react-redux';



function MyProfile() {
  const user = useSelector(state => state.users.selectedUser)

  
  return (
    <div>
      <h3> Welcome to Bookshelf Builder, {user.name}.</h3>
      <div>
        <h5>My Info</h5>
        <h4>Location:</h4> <span>{user.location}</span>
        <br />
        <h4>username:</h4> <span>{user.username}</span>
      </div>
      <div>
        <h3>About Bookshelf Builder:</h3>
        <p>Bookshelf builder is a tool to organize and share your favorite books with other users</p>

      </div>
    </div>
  );
}

export default MyProfile;