import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="app-container">
      <h1>Users List</h1>
      {users.map((user, index) => (
        <Users key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
