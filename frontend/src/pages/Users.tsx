import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserDetails from '../components/Users/UserDetails';
import axios from 'axios';
import classes from './Users.module.css';

type User = {
  _id: string;
  username: string;
  biography: string;
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:5000/users`);
    setUsers(response.data);
  };

  const onUserSelected = (user: User) => {
    setSelectedUser(user);
  };

  const renderedUserList = users.map((user) => {
    return (
      <li key={user._id}>
        <Link className={classes.link} to={`/users/${user._id}`}>
          <p>{user.username}</p>
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <h1>Welcome to the Users directory!</h1>
      <ol>{renderedUserList}</ol>
      <Routes>
        <Route path='/:userId' element={<UserDetails selectUser={onUserSelected} />} />
      </Routes>
    </React.Fragment>
  );
};

export default Users;
