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
            <div className="col" key={phone.id}>
              <Mobile
                key={phone.id}
                phone={phone}
                // onDelete={() => this.deleteAvenger(avenger.id)}
                // onLike={() => this.likeAvenger(avenger)} phone off /hariii
                //suneya thankss bn ekenmahhh
                //heta set wemuda eenam //over 
                // haree over
                //elamaa sunee over// elaa overrr//gn over
                
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let { data } = await axios.get(
      "http://localhost:5000" // replace with your API url
    );
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
