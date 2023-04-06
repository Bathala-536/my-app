
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from './images/cellworks.jpg';
import Button from 'react-bootstrap/Button';



function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <img src={img1}  alt="/" width='102.8px' height='54px'/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Technology</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">Need Help?</Nav.Link>&nbsp;&nbsp;
            <Button variant="danger">Contact us</Button>{' '}
            
            {/* <Nav.Link href="#memes">
            <Button variant="danger">Contact us</Button>{' '}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
 
    </Navbar>
  );
}

export default CollapsibleExample;