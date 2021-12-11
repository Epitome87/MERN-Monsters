import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Sites.module.css';
import site01 from '../images/Site01.jpg';

type Site = {
  _id: string;
  name: string;
  description: string;
  date: Date;
}

const Sites: React.FC = () => {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    fetchSites();
  }, []);

  const fetchSites = async () => {
    const response = await axios.get(`http://localhost:5000/sites/`);
    setSites(response.data);
  };

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
