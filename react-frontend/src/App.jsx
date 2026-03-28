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

  function deleteUser(id) {
  fetch(`/api/users/${id}`, {
    method: "DELETE",
  }).then(() => window.location.reload());
}
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-4 mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="mb-4">React + Node Users</h1>

        <div className="mb-3">
          <input
            className="form-control"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter a name..."
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary btn-lg px-4" onClick={addUser}>
            Add Test User
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

       <ul className="list-group">
  {users.map((u) => (
    <li
      key={u.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>
        {u.id}: {u.name}
      </span>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteUser(u.id)}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}

export default App;