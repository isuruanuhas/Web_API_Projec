import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import fire from "../src/config/Fire";
import LoginRegister from "../src/components/LoginRegister";
import Mobiles from "./components/Mobiles";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import Admin from "./components/Admin";
import MyCart from "./components/MyCart";
import Currency from "./components/Currency";
import Branches from "./components/Branches";
import Logout from "./components/Logout";
import Search from "./components/Search";
import "./App.css";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }

      this.setState({ loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <div>
        {this.state.user ? (
          <BrowserRouter>
            <NavBar />
            <NavBar2 />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Home" component={Mobiles} />
            <Route exact path="/MyCart" component={MyCart} />
            <Route exact path="/Currency" component={Currency} />
            <Route exact path="/Branches" component={Branches} />
            <Route exact path="/Logout" component={Logout} />
            <Route exact path="/Search" component={Search} />
          </BrowserRouter>
        ) : (
          <LoginRegister />
        )}
      </div>
    );

    // render() {
    //   return (
    //     // <div><Mobiles/></div>
    //     <BrowserRouter>
    //       <NavBar />
    //       <Route exact path="/Admin" component={Admin} />
    //       <Route exact path="/Home" component={Mobiles} />
    //       <Route exact path="/MyCart" component={MyCart} />
    //       <Route exact path="/Currency" component={Currency} />
    //       <Route exact path="/Branches" component={Branches} />
    //     </BrowserRouter>
    //   );
  }
}

export default App;
