// import './App.css';
import { useEffect } from "react";
import Login from "./features/users/Login";

function App() {

  //Auto-Login and fetch if there is a user session active
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
