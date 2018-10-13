import React, { Component } from 'react';

export default class Itinerary extends Component {
    render() {
        return (
            <div className="itineraryComponentDiv">
                <div className="itineraryParentDiv">
                    <div className="sizer red location1">
                        <img className="locationImage locationIm1" src={require("#")}/>
                        <p className="locationDesc locationD1"></p>
                    </div>
                    <div className="sizer white location2">
                        <img className="locationImage locationIm2" src={require("#")}/>
                        <p className="locationDesc locationD2"></p>
                    </div>
                    <div className="sizer red location3">
                        <img className="locationImage locationIm3" src={require("#")}/>
                        <p className="locationDesc locationD3"></p>
                    </div>
                </div>
            </div>
        );
    }
}