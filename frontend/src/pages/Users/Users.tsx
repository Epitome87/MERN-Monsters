import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDetails from '../../components/Users/UserDetails';
import UserList from '../../components/Users/UserList';

const Users: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the Users directory!</h1>
      <UserList />
      <Routes>
        <Route path='/:userId' element={<UserDetails />} />
      </Routes>
    </React.Fragment>
  );
};

export default Users;
