import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/UI/Navbar';
import Home from './pages/Home/Home';
import Sites from './pages/Sites/Sites';
import Users from './pages/Users/Users';
import UserDetails from './components/Users/UserDetails';
import SiteDetails from './components/Sites/SiteDetails';
import SiteCreation from './components/Sites/Form/SiteCreation';
import SiteEdit from './components/Sites/Form/SiteEdit';
import ReviewDetails from './components/Reviews/ReviewDetails';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container className='App' fluid>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/' element={<Users />}></Route>
          <Route path='/users/:userId' element={<UserDetails />} />
          <Route path='/sites' element={<Sites />} />
          <Route path='/sites/create' element={<SiteCreation />} />
          <Route path='/sites/:siteId' element={<SiteDetails />} />
          <Route path='/sites/:siteId/edit' element={<SiteEdit />} />
          <Route path='/sites/:siteId/reviews' element={<p>Reviews</p>} />
          <Route
            path='/sites/:siteId/reviews/:reviewId'
            element={<ReviewDetails />}
          />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
