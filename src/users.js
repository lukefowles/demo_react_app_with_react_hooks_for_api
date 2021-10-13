import { useState, useEffect } from 'react';

const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setUsers(data);
    });
}, []);

export default users;
