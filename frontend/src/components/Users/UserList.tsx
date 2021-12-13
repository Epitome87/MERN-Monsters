import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './UserList.module.css';

type User = {
  _id: string;
  username: string;
  biography: string;
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:5000/users`);
    setUsers(response.data);
  };

  const renderedUserList = users?.map((user) => {
    return (
      <li key={user._id}>
        <Link className={classes.link} to={`/users/${user._id}`}>
          <p>{user.username}</p>
          <img src={`https://robohash.org/${user.username}.png?set=set2`} alt={`Monster ${user.username}`}></img>
        </Link>
      </li>
    );
  });

  return <ul className={classes.UserList}>{renderedUserList}</ul>;
};

export default UserList;
