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
import { Search } from 'react-bootstrap-icons';

function Navigation() {
  return (
    <Navbar 
      className="text-light border-4 border-bottom border-primary"
      bg="dark" variant="dark" expand="lg" sticky="top"
    >
      <Navbar.Toggle aria-controls="navbarExpand"/>
      <Navbar.Collapse id="navbarExpand">
        <Nav className="mr-auto">
          <Nav.Link className="h4 text-light font-odibee-sans" href="/">Home</Nav.Link>
          <Nav.Link className="h4 text-light font-odibee-sans" href="/MappingNWC">Mapping NWC</Nav.Link>
          <Nav.Link className="h4 text-light font-odibee-sans" href="/DiscoverNWCStories">Discover NWC Stories</Nav.Link>
        </Nav>
        <Nav style={{backgroundColor: "white", borderRadius: "999px", padding: "0px"}}>
          <Form className="d-flex mt-2 mb-2 p-0">
            <Button className="rounded-circle text-center" variant="danger"><Search/></Button>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 border-0"
              aria-label="Search"
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
