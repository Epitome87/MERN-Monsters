import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SitesContext } from '../../contexts/SitesContext';
import classes from './SiteDetails.module.css';
import tempImage from '../../images/Site02.jpg';

const SiteDetails: React.FC = (props) => {
  const { sites } = useContext(SitesContext);

  const params = useParams();

  const searchedSite = sites.find((site) => site._id === params.siteId);

  return (
    <article className={classes.SiteDetails}>
      <h1>{searchedSite?.name}</h1>
      <p>{searchedSite?.description}</p>
      <img
        src={tempImage}
        alt={searchedSite?.name}
        style={{ width: '250px', borderRadius: '5px' }}
      />
    </article>
  );
};

export default SiteDetails;
