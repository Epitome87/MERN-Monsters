import React, { useState } from 'react';
import Site from '../models/Site';
import axios from 'axios';

type SitesContextObj = {
  sites: Site[];
  fetchSites: () => void;
};

export const SitesContext = React.createContext<SitesContextObj>({
  sites: [],
  fetchSites: () => {},
});

const SitesContextProvider: React.FC = (props) => {
  const [sites, setSites] = useState<Site[]>([]);

  const fetchSites = async () => {
    console.log('FETCHING CONTEXT');
    const res: { data: any } = await axios.get('http://localhost:5000/sites');
    const fetchedSites = res.data;
    setSites(fetchedSites);

    return fetchedSites;
  };

  const contextValue: SitesContextObj = {
    sites,
    fetchSites,
  };

  return (
    <SitesContext.Provider value={contextValue}>
      {props.children}
    </SitesContext.Provider>
  );
};

export default SitesContextProvider;
