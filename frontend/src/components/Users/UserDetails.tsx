import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewDetails from '../Reviews/ReviewDetails';
import classes from './UserDetails.module.css';

type Review = {
  _id: string;
  author: User;
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
  const [extra, setExtra] = useState('');

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

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setExtra(event.currentTarget.name);
  };

  const renderedReviews = user?.reviews.map((review) => {
    return (
      <li key={review._id}>
        <p>{review?.title}</p>
        <p>{review?.body}</p>
        <p>Rating {review?.rating}</p>
      </li>
    );
  });

  return (
    <div className={classes.UserDetails}>
      <section className={classes.profile}>
        <img
          src={`https://robohash.org/${user?.username}.png?set=set2`}
          alt={`Monster ${user?.username}`}
        />
        <h2 className={classes.username}>{user?.username}</h2>
        <p>{user?.biography}</p>
        <div className={classes.collections}>
          <button
            className={classes.sites}
            onClick={handleButtonClick}
            name='sites'
          >{`${user?.username}'s Sites`}</button>
          <button
            className={classes.reviews}
            onClick={handleButtonClick}
            name='reviews'
          >{`${user?.username}'s Reviews`}</button>
          <button
            className={classes.friends}
            onClick={handleButtonClick}
            name='friends'
          >{`${user?.username}'s Friends`}</button>
        </div>
      </section>
      <section className={classes.extra}>
        <ul>{extra === 'reviews' ? renderedReviews : extra}</ul>
      </section>
    </div>
  );
};

export default UserDetails;
