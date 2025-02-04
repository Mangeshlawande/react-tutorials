import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the server
    axios
      .get('https://jsonplaceholder.typicode.com/users') // Example API
      .then((response) => {
        setUsers(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;