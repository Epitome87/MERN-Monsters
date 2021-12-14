import React from 'react';
import { Outlet } from 'react-router-dom';
import UserList from '../../components/Users/UserList';

const Users: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the Users directory!</h1>
      <UserList />
      <Outlet />
    </React.Fragment>
  );
};

export default Users;
