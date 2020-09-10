import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar2 extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/Logout">Logout</Link>
        <Link to="/Branches">Branches</Link>
      </nav>
    );
  }
}

export default NavBar2;
