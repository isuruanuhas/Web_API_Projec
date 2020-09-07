import React, { Component } from "react";

class Mobile extends Component {
  state = {
    pId: this.props.phone.id,
  };

  btnAddToCart = (e, itemData) => {
    // init
    let lstCurrentItems = [];
    let newItems = [];
    let phoneItem = itemData;
    let isUpdate = false;

    // retrieve from localstorage
    lstCurrentItems = JSON.parse(localStorage.getItem("app:geniusMobile:cart"));

    if (lstCurrentItems != null) {
      // finding the current item if already added
      let modIndex = lstCurrentItems.map((obj) => obj.id).indexOf(phoneItem.id);

      // check
      if (modIndex > -1) {
        isUpdate = true;
        phoneItem.quantity++;
        lstCurrentItems[modIndex] = phoneItem;
      }

      newItems = lstCurrentItems;
    }

    // check
    if (!isUpdate) {
      // adding quantity field
      phoneItem.quantity = 1;
      // pushing
      newItems.push(phoneItem);
    }

    // setting localstorage
    localStorage.setItem("app:geniusMobile:cart", JSON.stringify(newItems));
  };

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.phone.imgUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{this.props.phone.productName}</h5>
          <h6>{this.props.phone.price}</h6>
          <h6>{this.props.phone.quantity}</h6>
          <button
            className="btn btn-info"
            onClick={(e) => {
              this.btnAddToCart(e, this.props.phone);
            }}
          >
            Add to cart{" "}
          </button>{" "}
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => {
              localStorage.clear();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default Mobile;
