import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './SiteDetails.module.css';
import tempImage from '../../images/Site02.jpg';

type Site = {
  _id: string;
  name: string;
  description: string;
  date: Date;
};

const SiteDetails: React.FC = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [site, setSite] = useState<Site>();

  useEffect(() => {
    fetchSite();
  }, []);

  const fetchSite = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/sites/${params.siteId}`
      );

      setSite(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/sites/${params.siteId}/edit`);
  };

  return (
    <article className={classes.SiteDetails}>
      <h1>{site?.name}</h1>
      <p>{site?.description}</p>
      <img
        src={tempImage}
        alt={site?.name}
        style={{ width: '250px', borderRadius: '5px' }}
      />
      <button onClick={handleEditClick}>Edit</button>
    </article>
  );
};

export default SiteDetails;
