import './App.css';
import { useEffect } from "react";
import Login from "./features/users/Login";
import { fetchUser } from "./features/users/usersSlice"

function App() {

  //Auto-Login and fetch if there is a user session active
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => fetchUser(user));
      }
    });
  }, []);

  return (
    <div className='app'>
      <Login />
    </div>
  );
}

export default App;
