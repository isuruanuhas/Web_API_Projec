import React, { Component } from "react";
import fire from "../config/Fire";

//import fire from '../../config/Fire';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class Search extends Component {
  state = {
    query: "",
    products: [],
  };

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <div className="col-md-6">
          <div style={{ display: "flex" }}>
            <input
              type="text"
              class="form-control mr-2"
              value={this.state.email}
              onChange={(e) => this.setState({ query: e.target.value })}
              name="Search"
            />
            <button
              className="btn btn-success"
              onClick={() => this.handleSearch()}
            >
              Search
            </button>
          </div>
        </div>
        {this.state.products.length > 0 &&
          this.state.products.map((product, k) => (
            <div key={k}>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src={product.imgUrl}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{product.productName}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  handleSearch = () => {
    const { query } = this.state;

    console.log(query);

    axios
      .get(`http://localhost:5000/search/${query}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ products: response.data.response });
        console.log("state", this.state.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default Search;
