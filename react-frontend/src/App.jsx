import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [newName, setNewName] = useState("");


  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error(err);
        setError("Could not load users from backend");
      });
  }, []);

function addUser() {
  fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newName }),
  })
    .then((res) => res.json())
    .then(() => window.location.reload());
}

  return (
    <div style={{ padding: 40 }}>
      <h1>React + Node Users</h1>
      <input
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
      placeholder="Enter a name..."
      />
    
      <button onClick={addUser}>Add Test User</button>


      {error && <p>{error}</p>}

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id}: {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
