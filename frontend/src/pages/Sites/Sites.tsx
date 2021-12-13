import React from 'react';

import SiteList from '../../components/Sites/SiteList';
import classes from './Sites.module.css';

const Sites: React.FC = () => {
  return (
    <section className={classes.Sites}>
      <h1>Welcome to the Sites directory!</h1>
      <SiteList />
    </section>
  );
};

export default Sites;
