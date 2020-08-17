import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import React from "react";

const NavBar = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="/">
        ExcerTracker
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto">
          <ReactBootStrap.Nav.Link href="/">Exercises</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/create">
            Create Exercise Log
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/user">
            Create User
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};
export default NavBar;
