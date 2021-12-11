import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SitesContext } from '../../contexts/SitesContext';
import classes from './SiteDetails.module.css';
import tempImage from '../../images/Site02.jpg';

const SiteDetails: React.FC = (props) => {
  const { sites } = useContext(SitesContext);
  const params = useParams();
  const navigate = useNavigate();

  const searchedSite = sites.find((site) => site._id === params.siteId);

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/sites/${params.siteId}/edit`);
  };

  return (
    <article className={classes.SiteDetails}>
      <h1>{searchedSite?.name}</h1>
      <p>{searchedSite?.description}</p>
      <img
        src={tempImage}
        alt={searchedSite?.name}
        style={{ width: '250px', borderRadius: '5px' }}
      />
      <button onClick={handleEditClick}>Edit</button>
    </article>
  );
};

export default SiteDetails;
