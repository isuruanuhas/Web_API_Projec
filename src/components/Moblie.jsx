import React, { Component } from "react";

const style = {
  imgStyle: {
    height: "200px",
    width: "100%",
    display: "block",
  },
};

class Mobile extends Component {
  state = {
    pId: this.props.phone.id,
    isAdding: false,
  };

  btnAddToCart = (e, itemData) => {
    // setState (disable button)
    this.setState({ isAdding: true }, () => {
      // wait
      setTimeout(() => {
        // init
        let lstCurrentItems = [];
        let newItems = [];
        let phoneItem = itemData;
        let isUpdate = false;

        // retrieve from localstorage
        lstCurrentItems = JSON.parse(
          localStorage.getItem("app:geniusMobile:cart")
        );

        if (lstCurrentItems != null) {
          // finding the current item if already added
          let modIndex = lstCurrentItems
            .map((obj) => obj.id)
            .indexOf(phoneItem.id);

          // check
          if (modIndex > -1) {
            let intQty = parseInt(lstCurrentItems[modIndex].quantity);
            intQty++;
            phoneItem.quantity = intQty;

            isUpdate = true;
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

        //console.log(newItems);

        // setting localstorage
        localStorage.setItem("app:geniusMobile:cart", JSON.stringify(newItems));

        this.setState({ isAdding: false });
      }, 500);
    });
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            src={this.props.phone.imgUrl}
            className="card-img-top"
            style={style.imgStyle}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.phone.productName}</h5>
            <h6>{this.props.phone.price}</h6>
            <button
              disabled={this.state.isAdding}
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
                //localStorage.clear();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Mobile;
