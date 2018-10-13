import React, { Component } from 'react';
import './home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="homeComponentDiv">
                <div className="homeParentComponent">
                    <div className="sizer homeHeroDiv"></div>
                    <div className="sizer white homeInviteFormDiv"></div>
                    <div className="sizer red homeItineraryDiv"></div>
                    <div className="sizer homeMapDiv"></div>
                    <div className="sizer red registerTripDiv"></div>
                    <div className="sizer white homeBridalPartyDiv"></div>
                    <div className="sizer red "></div>
                </div>
            </div>
        );
    }
}