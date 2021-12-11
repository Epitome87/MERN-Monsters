import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './Site.module.css';

interface SiteProps {
  name: string;
  image: string;
}

const Site: React.FC<SiteProps> = (props) => {
  const params = useParams();
  const siteId = params.siteId;

  return (
    <div className={classes.Site}>
      <h1>{props.name}</h1>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: '250px', borderRadius: '5px' }}
      />
      <p>{siteId}</p>
    </div>
  );
};

export default Site;
