import React from 'react';
import { useParams } from 'react-router-dom';

const User: React.FC = () => {
  const params = useParams();
  const userId = params.userId;

  return (
    <div>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default User;
