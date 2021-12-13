import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './SiteDetails.module.css';
import tempImage from '../../images/Site02.jpg';

type Site = {
  _id: string;
  name: string;
  description: string;
  date: Date;
  author: { username: string };
  reviews: any[];
};

const SiteDetails: React.FC = (props) => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const [site, setSite] = useState<Site>();

  useEffect(() => {
    const fetchSite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/sites/${siteId}`
        );

        setSite(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSite();
  }, [siteId]);

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/sites/${siteId}/edit`);
  };

  if (!site) {
    return <p>Error retrieving Site information</p>;
  }

  return (
    <article className={classes.SiteDetails}>
      <h1>{site?.name}</h1>
      <p>{site?.description}</p>
      <img
        src={tempImage}
        alt={site?.name}
        style={{ width: '250px', borderRadius: '5px' }}
      />
      <p>Discovered by: {site.author ? site.author.username : 'Unknown'}</p>
      <ul>
        <p>
          {site.reviews && site.reviews.length > 1 ? 'Reviews' : 'No Reviews'}
        </p>
        {site?.reviews.map((review) => {
          return (
            <li key={review._id}>
              <Link to={`/sites/${siteId}/reviews/${review._id}`}>
                Review: {review.author.username}
              </Link>
            </li>
          );
        })}
      </ul>

      <button onClick={handleEditClick}>Edit</button>
    </article>
  );
};

export default SiteDetails;

// 1: 61b54d85ee4e0e2f9162a3f6
// 2: 61b54dcbeaff6093fa16bad9
// 5: 61b55ba712fdd51995d6e22b
