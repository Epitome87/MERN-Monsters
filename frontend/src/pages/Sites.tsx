import React, { useContext, useEffect, useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import { SitesContext } from '../contexts/SitesContext';
import SiteDetails from '../components/Sites/SiteDetails';
import classes from './Sites.module.css';
import site01 from '../images/Site01.jpg';

const Sites: React.FC = () => {
  const { sites, fetchSites } = useContext(SitesContext);

  useEffect(() => {
    console.log('USE');
    fetchSites();
  }, []);

  return (
    <section className={classes.Sites}>
      <h1>Welcome to the Sites directory!</h1>
      <ul className={classes.list}>
        {sites.map((site) => {
          return (
            <li key={site._id}>
              <Link className={classes.link} to={`/sites/${site._id}`}>
                <p>{site.name}</p>
                <img src={site01} alt={site.name} />
                {/* <Site name={site.name} image={site01} /> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sites;
