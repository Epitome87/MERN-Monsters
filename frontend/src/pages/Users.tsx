import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from '../components/Users/User';

const Users: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the Users directory!</h1>
      <Routes>
        <Route path='/:userId' element={<User />} />
      </Routes>
    </React.Fragment>
  );
};

export default Users;
