import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type User = {
  username: string;
};

type Review = {
  author: User;
  title: string;
  body: string;
  rating: number;
};

const ReviewDetails: React.FC = () => {
  const { siteId, reviewId } = useParams();
  const [review, setReview] = useState<Review>();

  const fetchReview = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:5000/sites/${siteId}/reviews/${reviewId}`
    );

    setReview(response.data);
  }, [siteId, reviewId]);

  useEffect(() => {
    fetchReview();
  }, [fetchReview]);

  return (
    <div>
      <h1>Review</h1>
      <p>Author: {review?.author.username}</p>
      <p>Title: {review?.title}</p>
      <p>Body: {review?.body}</p>
      <p>Rating: {review?.rating}</p>
    </div>
  );
};

export default ReviewDetails;
