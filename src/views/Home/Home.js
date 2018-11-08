import React, { Component } from 'react';
import './home.css'
import '../../App.css'
import RsvpForm from '../../ComptsWIthState/RsvpForm/RsvpForm';
import Itinerary from "../Itinerary/Itinerary";
import SimpleMap from '../../ComptsWIthState/SimpleMap/SimpleMap';
import {Link} from 'react-router-dom';
import Countdown from "../../ComptsWIthState/CountDown/CountDown"

export default class Home extends Component {
    render() {
        return (
            <div className="homeComponentDiv">
                <div className="homeParentComponent">
                    <div className="logoHeaderDiv"> <div style={{float: "right"}} className="links"><Link to="/itinerary"><button className="linkButton ItineraryView">Itinerary</button></Link><Link to="/whereToStay"><button className="linkButton WhereToStayView">Where to stay</button></Link></div></div>
                    <div className="sizer homeHeroDiv"></div>

                    <div className="sizer white homeInviteFormDiv">
                        <RsvpForm rsvpTitle={"R.S.V.P"} rsvpVerbage={"Let us know if you plan on attending the wedding celebration. If you are not sure if you can attend yet simply select Want to come, but not sure yet and let us know when you make your decision. Please only add guests that have been invited unless your invitation has a plus one on it."}/>
                    </div>
                    <div className="sizer red homeItineraryDiv">
                        <Itinerary/>
                    </div>
                    <div className="sizer homeMapDiv">
                        <SimpleMap/>
                    </div>
                    <div className="sizer red registerTripDiv">
                        <div className="giftingRegister">
                            <h1>Gift Registry </h1>
                            <p className="giftRegistryDesc">We have been together for over 10 years and we honestly have every physical thing that we could possibly need. However, through our hard work and dedication we have not had the opportunity to explore new lands and cultures as much as we would like. So we ask that if you feel the need to send us a gift you contribute to an advanture that we will remember for a lifetime.</p>
                            <button className="linkToTripRegistry">click here to register</button>
                        </div>
                    </div>
                    <div className="sizer white homeBridalPartyDiv">
                        <div className="fulWidthBridalPartyParent groomesmen-section">
                            <div className="centeredBridalPartydiv">
                                        <div className="bridalPartySectionTitle"><h2>groomesmen</h2></div>
                                <div className="immediateBridalPartyParent">
                                    <div>
                                        <div className="bridalPartyMemberCircle"><img src={require("../../images/lamp1.png")}/></div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle"><img src={require("../../images/lamp1.png")}/></div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    
                                </div>{/*  */}
                                <div className="immediateBridalPartyParent">{/*  */}
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fulWidthBridalPartyParent bridesmaides-section">
                            <div className="centeredBridalPartydiv">
                                        <div className="bridalPartySectionTitle"><h2>bridesmaides</h2></div>
                                <div className="immediateBridalPartyParent">
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                </div>
                                <div className="immediateBridalPartyParent">
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    <div>
                                        <div className="bridalPartyMemberCircle">{/* <img src={require("./")}/> */}</div>
                                        <div className="bridalPartyNameParent"><h2 className="nameDiv">John Adams</h2></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sizer red "> 
                        {/* <Countdown/> */}
                    </div>
                </div>
            </div>
        );
    }
}