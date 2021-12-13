import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type Review = {
  _id: string;
  author: string;
  title: string;
  body: string;
  rating: number;
};

type User = {
  _id: string;
  username: string;
  biography: string;
  reviews: Review[];
};

const UserDetails: React.FC = () => {
  const params = useParams();
  const { userId } = params;
  const [user, setUser] = useState<User>();

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const renderedUserReviews = user?.reviews.map((review) => {
    return <li key={review._id}>{review.body}</li>;
  });

  return (
    <div>
      <h2>{user?.username}</h2>
      <p>{user?.biography}</p>
      <p>{`${user?.username}'s Reviews`}</p>
      {renderedUserReviews}
    </div>
  );
};

export default UserDetails;
