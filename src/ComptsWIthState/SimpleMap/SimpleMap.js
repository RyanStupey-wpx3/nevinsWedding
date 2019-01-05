import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./simpleMap.css"
const Pin = () => <i class="fa fa-map-pin fa-3x" aria-hidden="true"></i>

 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
       lat: 47.530102,
       lng: -122.0335167
    },
    zoom: 15
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
          <Pin className="pin"
            lat={47.530102}
            lng={-122.0335167} 
            text={'Seattle'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;