import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import site01 from '../../images/Site01.jpg';
import classes from './SiteList.module.css';

type Site = {
  _id: string;
  name: string;
  description: string;
  date: Date;
};

const SiteList: React.FC = () => {
  const [sites, setSites] = useState<Site[]>([]);

  const fetchSites = async () => {
    const response = await axios.get(`http://localhost:5000/sites/`);
    setSites(response.data);
  };

  useEffect(() => {
    fetchSites();
  }, []);

  const renderedSiteList = sites.map((site) => {
    return (
      <li key={site._id}>
        <Link className={classes.link} to={`/sites/${site._id}`}>
          <p>{site.name}</p>
          {/* <img src={site01} alt={site.name} /> */}
        </Link>
      </li>
    );
  });

  return (
    <section className={classes.Sites}>
      <ul className={classes.list}>{renderedSiteList}</ul>
    </section>
  );
};

export default SiteList;
