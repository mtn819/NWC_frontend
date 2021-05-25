import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar className="mr-auto" bg="light" expand="xs">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
      <Link to="/">Home</Link>
      <Link to="/MappingNWC">Mapping the NWC</Link>
      <Link to="/">About the Project</Link>
      
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Item1</Nav.Link>
          <Nav.Link href="#link">Item2</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
