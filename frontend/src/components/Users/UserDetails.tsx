import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type User = {
  _id: string;
  username: string;
  biography: string;
};

type UserDetailsProps = {
  selectUser: (user: User) => void;
};

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const params = useParams();
  const userId = params.userId;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      setUser(response.data);
      props.selectUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Username: {user?.username}</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;
