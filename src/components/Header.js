import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <a href="/">
            <img
              src={require("../logo.png")}
              style={{ "max-height": "50px" }}
            />
          </a>
          <NavbarBrand href="/" className="ml-auto">
            Airport Currency Exchange
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
