import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Pin = ({ text }) => <div className="pin">{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
       lat: 47.608013,
       lng: -122.335167,
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40rem', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCw2nE9PjwNtHE-ZjkjQbk7ecXheDp59Qw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Pin
            lat={47.608013}
            lng={-122.335167}
            text={'Seattle'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;