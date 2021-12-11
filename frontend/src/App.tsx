import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Sites from './pages/Sites';
import Users from './pages/Users';
import SiteDetails from './components/Sites/SiteDetails';
import SiteCreation from './components/Sites/SiteCreation';
import Container from 'react-bootstrap/Container';

import './App.css';
import SitesContextProvider from './contexts/SitesContext';

function App() {
  return (
    <BrowserRouter>
      <SitesContextProvider>
        <Container className='App' fluid>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<SiteCreation />} />
            <Route path='/users' element={<Users />}>
              <Route path=':userId' element={<p>User by ID</p>} />
            </Route>
            <Route path='/sites' element={<Sites />} />
            <Route path='/sites/:siteId' element={<SiteDetails />} />
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </Container>
      </SitesContextProvider>
    </BrowserRouter>
  );
}

export default App;
