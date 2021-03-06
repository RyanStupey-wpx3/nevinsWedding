import React, { Component } from 'react';
import "./itinerary.css";
import {Link} from "react-router-dom";

export default class Itinerary extends Component {
    render() {
        return (
            <div className="itineraryComponentDiv">
                <div className="itineraryParentDiv">
                    <div className="tabSizer white location1">
                        <img className="locationImage locationIm1" src={require("../../images/lamp1.png")}/>
                        <div className="tabContent">
                            <h1 className="rehearsalDinnerH1">Rehearsal Dinner</h1>
                            <div className="dateAndTime">6:00PM on Friday September 27th 2019 </div>
                            <div className="location">Location TBD</div>
                            <p className="locationDesc locationD1">
                                 wafer sweet caramels liquorice. Sweet cotton candy toffee sesame snaps croissant cake. Fruitcake jelly-o candy canes pie chocolate bar. Macaroon tootsie roll biscuit tart lollipop marzipan chocolate bar. Jujubes dragée candy canes.
                            </p>
                            <Link to="/itinerary"><button className="learnMoreButton">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="tabSizer white location2">
                        <img className="locationImage locationIm2" src={require("../../images/plate1.png")}/>
                        <div className="tabContent">
                            <h1>Ceremony</h1>
                            <div className="dateAndTime">6:30PM on Saturday September 28th 2019 </div>
                            <div className="location">The Pickering Barn in Issaquah, WA </div>
                            <p className="locationDesc locationD2">
                                Soufflé wafer sweet caramels liquorice. Sweet cotton candy toffee sesame snaps croissant cake. Fruitcake jelly-o candy canes pie chocolate bar. Macaroon tootsie roll biscuit tart lollipop marzipan chocolate bar. Jujubes dragée candy canes.
                            </p>
                            <Link to="/itinerary"><button className="learnMoreButton">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="tabSizer white location3">
                        <img className="locationImage locationIm3" src={require("../../images/lights.png")}/>
                        <div className="tabContent">
                            <h1>Reception</h1>
                            <div className="dateAndTime">7:30PM on Saturday September 28th 2019 </div>
                            <div className="location">The Pickering Barn in Issaquah, WA</div>
                            <p className="locationDesc locationD3">
                                 wafer sweet caramels liquorice. Sweet cotton candy toffee sesame snaps croissant cake. Fruitcake jelly-o candy canes pie chocolate bar. Macaroon tootsie roll biscuit tart lollipop marzipan chocolate bar. Jujubes dragée candy canes.
                            </p>
                            <Link to="/itinerary"><button className="learnMoreButton">Learn More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}