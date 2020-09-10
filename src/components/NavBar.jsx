import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/Home">Home</Link>
        <Link to="/MyCart">My Cart</Link>
        <Link to="/Search">Search</Link>
        <Link to="/Currency">Currency</Link>
        <Link to="/Admin">Admin</Link>
      </nav>
    );
  }
}

export default NavBar;
