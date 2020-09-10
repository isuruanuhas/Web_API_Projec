import React, { Component } from "react";
import fire from "../config/Fire";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
//import fire from '../../config/Fire';

class Admin extends Component {
  state = {
    ProductID: "",
    productName: "",
    price: 0,
    quantity: 0,
    imgUrl: "",

    // updateQTY
    updateProductId: "",
    updateQTY: 0,
  };

  logout = () => {
    fire.auth().signOut();
  };

  handleUpdate = async (e) => {
    try {
      const { ProductID, productName, price, quantity, imgUrl } = this.state;
      let { data } = await axios.post("http://localhost:5000/admin", {
        productid: ProductID,
        productname: productName,
        price: price,
        quantity: parseInt(quantity),
        imgUrl: imgUrl,
      });

      if (data != null && data != {}) {
        if (data.message) alert(data.message);
        else alert("Successfull");
      } else alert("Error saving data");
    } catch (error) {
      alert("Error saving data");
      console.log(error.message);
    }

    e.preventDefault();
  };

  updateProductHandler = async (e) => {
    try {
      const { updateProductId, updateQTY } = this.state;
      let { data } = await axios.put("http://localhost:5000/admin", {
        productid: updateProductId,
        quantity: parseInt(updateQTY),
      });

      if (data != null && data != {}) {
        if (data.message) alert(data.message);
        else alert("Successfull");
      } else alert("Error saving data");
    } catch (error) {
      alert("Error saving data");
      console.log(error.message);
    }

    e.preventDefault();
  };

  render() {
    return (
      <form>
        <div class="row">
          <div class="column">
            <div class="container">
              <h3>Add New Product</h3>
              <div class="form-group">
                <label for="ProductID">Product ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="ProductID"
                  aria-describedby="texthelp"
                  placeholder="Enter your Product ID here"
                  onChange={(e) => this.setState({ ProductID: e.target.value })}
                ></input>
              </div>
              <div class="form-group">
                <label for="ProductName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="ProductName"
                  aria-describedby="texthelp"
                  placeholder="Enter your Product Name here"
                  onChange={(e) =>
                    this.setState({ productName: e.target.value })
                  }
                ></input>
              </div>
              <div className="form-group">
                <label for="ProductPrice">Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="ProductPrice"
                  aria-describedby="texthelp"
                  placeholder="Enter yourProduct Price here"
                  onChange={(e) => this.setState({ price: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <label for="ProductQuantity">Product Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="ProductQuantity"
                  aria-describedby="texthelp"
                  placeholder="Enter your Product Quantity here"
                  onChange={(e) => this.setState({ quantity: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <label for="ProductQuantity">Product URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="ProductURL "
                  aria-describedby="texthelp"
                  placeholder="Enter your Product URL here"
                  onChange={(e) => this.setState({ imgUrl: e.target.value })}
                ></input>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleUpdate}
              >
                Add Product
              </button>{" "}
              &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.logout}
              >
                Clear
              </button>
            </div>
          </div>
          <div class="column">
            <div class="container">
              <h3>Update Product</h3>

              <div class="form-group">
                <label for="ProductID">Product ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="ProductID"
                  aria-describedby="texthelp"
                  placeholder="Enter your Product ID here"
                  onChange={(e) => {
                    this.setState({ updateProductId: e.target.value });
                  }}
                ></input>
              </div>

              <div className="form-group">
                <label for="ProductQuantity">Product Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="ProductQuantity"
                  aria-describedby="texthelp"
                  placeholder="Enter your Product Quantity here"
                  onChange={(e) => {
                    this.setState({ updateQTY: e.target.value });
                  }}
                ></input>
              </div>

              <div className="input-group-append" />
              <span classn="input-group-text" id="" />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateProductHandler}
            >
              Update Product
            </button>{" "}
            &nbsp;
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.logout}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Admin;
