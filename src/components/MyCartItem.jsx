import React, { Component } from "react";

const style = {};

class MyCartItem extends Component {
  render() {
    const cartItem = this.props.cartItem;
    return (
      <div className="col-md-12">
        <div className="row cart-item shadow-sm p-3 mb-2 bg-white rounded">
          <div className="col-md-6">
            <div>
              Title : <strong>{cartItem.productName}</strong>
            </div>
            <div>
              Quantity : <strong>{cartItem.quantity}</strong>
            </div>
            <div>
              Price : <strong>{cartItem.price}</strong>
            </div>
          </div>

          <div className="col-md-6">
            Sub Total : <strong>{cartItem.price * cartItem.quantity}</strong>
          </div>
        </div>
      </div>
    );
  }
}
export default MyCartItem;
