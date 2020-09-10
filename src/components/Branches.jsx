import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ src, text }) => (
  <div>
    <span>{text}</span>
    <img src={src} />
  </div>
);

class Branches extends Component {
  static defaultProps = {
    center: {
      lat: 7.08731,
      lng: 80.014366,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDBDcqvynTXzhccC452s1C6i99Pl1qhAjI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={7.08731}
            lng={80.014366}
            src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            text="Gampaha"
          />

          <AnyReactComponent
            lat={6.927079}
            lng={79.861244}
            src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            text="Colombo"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Branches;
