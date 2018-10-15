import React, { Component } from 'react';
import './home.css'
import '../../App.css'
import RsvpForm from '../../ComptsWIthState/RsvpForm/RsvpForm';
import Itinerary from "../Itinerary/Itinerary";
export default class Home extends Component {
    render() {
        return (
            <div className="homeComponentDiv">
                <div className="homeParentComponent">
                    <div className="logoHeaderDiv"></div>
                    <div className="sizer homeHeroDiv"></div>

                    <div className="sizer white homeInviteFormDiv">
                        <RsvpForm rsvpTitle={"R.S.V.P"} rsvpVerbage={"Let us know if you plan on attending the wedding celebration. If you are not sure if you can attend yet simply select Want to come, but not sure yet and let us know when you make your decision. Please only add guests that have been invited unless your invitation has a plus one on it."}/>
                    </div>
                    <div className="sizer red homeItineraryDiv">
                        <Itinerary/>
                    </div>
                    <div className="sizer homeMapDiv"></div>
                    <div className="sizer red registerTripDiv"></div>
                    <div className="sizer white homeBridalPartyDiv"></div>
                    <div className="sizer red "></div>
                </div>
            </div>
        );
    }
}