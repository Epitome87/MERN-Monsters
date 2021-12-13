import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar: React.FC = (props) => {
  return (
    <Navbar fixed='top' bg='light' expand='lg'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          MERN Monsters
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/users'>
              Users
            </Nav.Link>
            <Nav.Link as={NavLink} to='/sites'>
              Sites
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title='Matthew' id='basic-nav-dropdown'>
              <NavDropdown.Item
                as={NavLink}
                to={`/users/61b3f5a94ef9f2d7181e478b`}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`/users/61b3f5a94ef9f2d7181e478b/friends`}
              >
                Friends
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={`/users/61b3f5a94ef9f2d7181e478b/reviews`}
              >
                My Reviews
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to=''>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
