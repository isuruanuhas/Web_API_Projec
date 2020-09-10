import React, { Component } from "react";
import axios from "axios";
import Mobile from "./Moblie";
import MyCartItem from "./MyCartItem";
class MyCart extends Component {
  state = {
    cartItems: [],
    totalPrice: 0,
  };

  clearCart = () => {
    localStorage.clear();
    this.setState({ cartItems: [], totalPrice: 0 });
  };

  updateQTY = async (itemData) => {
    try {
      let { data } = await axios.put("http://localhost:5000/order", {
        productid: itemData.id + "",
        quantity: itemData.quantity,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  proceedCart = async () => {
    let tempCartItems = JSON.parse(
      localStorage.getItem("app:geniusMobile:cart")
    );

    if (tempCartItems != null) {
      try {
        const { cartItems } = this.state;
        let productNames = "";
        tempCartItems.forEach((itemData) => {
          productNames += itemData.productName + ", ";
          this.updateQTY(itemData);
        });

        let { data } = await axios.post("http://localhost:5000/order", {
          total: this.state.totalPrice,
          productname: productNames,
        });

        //console.log(data);

        if (data != null && data != {}) {
          if (data.message) alert(data.message);
          else alert("Successfull");
        } else alert("Error saving data");
      } catch (error) {
        alert("Error saving data");
        console.log(error.message);
      }

      this.clearCart();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>My-Cart</h1>
          </div>
          <div className="col-md-6">
            <a
              onClick={this.clearCart}
              className="btn btn-danger float-right mt-2"
            >
              Remove All
            </a>
          </div>
        </div>

        {this.state.cartItems != null ? (
          <div className="my-cart-content">
            <div
              className="row mt-5"
              style={{ maxHeight: 450, overflowX: "hidden", overflowY: "auto" }}
            >
              {this.state.cartItems.map((cartItem) => {
                return <MyCartItem key={cartItem.id} cartItem={cartItem} />;
              })}
            </div>
            <div className="col-md-6 float-right">
              <div className="row total-card shadow-sm p-3 my-2 bg-white rounded">
                <div className="col-md-6">
                  Total : <strong>{this.state.totalPrice}</strong>
                </div>
              </div>
              <div className="row float-right">
                <div className="cart-buttons">
                  <a onClick={this.proceedCart} className="btn btn-primary">
                    Proceed
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>No Items</h3>
        )}
      </div>
    );
  }

  async componentDidMount() {
    let tempCartItems = JSON.parse(
      localStorage.getItem("app:geniusMobile:cart")
    );
    this.setState({
      cartItems: tempCartItems,
    });

    if (tempCartItems != null) {
      let total = this.state.totalPrice;
      tempCartItems.forEach((cartItem) => {
        total += cartItem.price * cartItem.quantity;
      });

      this.setState({ totalPrice: total });
    }
  }
}
export default MyCart;
