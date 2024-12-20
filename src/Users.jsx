import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/users')
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.length === 0 ? <p>No users found.</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
