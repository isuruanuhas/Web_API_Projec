import React, { Component } from "react";
import fire from "../config/Fire";

class Logout extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div>
        <h1>please press the below Button to LogOut</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
