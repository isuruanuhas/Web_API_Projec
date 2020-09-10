import React, { Component } from "react";
import axios from "axios";
import Mobile from "./Moblie";
class Mobiles extends Component {
  state = {
    mobilephones: [],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.mobilephones.map((phone) => (
            <Mobile key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000");
    console.log(data);

    let mobiles = data.map((mobilePhone) => {
      return {
        id: mobilePhone.id,
        imgUrl: mobilePhone.imgUrl,
        productName: mobilePhone.productName,
        quantity: mobilePhone.birthname,
        price: mobilePhone.price,
      };
    });

    this.setState({ mobilephones: mobiles });
  }
}
export default Mobiles;
