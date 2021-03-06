import React, { Component } from 'react';
import './home.css'
import '../../App.css';
// import {connect} from 'react-redux';
// import {GET_RSVP} from '../../redux/reducer';
import {connect} from 'react-redux';
import RsvpForm from '../../ComptsWIthState/RsvpForm/RsvpForm';
import Itinerary from "../Itinerary/Itinerary";
import SimpleMap from '../../ComptsWIthState/SimpleMap/SimpleMap';
import {Link} from 'react-router-dom';
import Countdown from "../../ComptsWIthState/CountDown/CountDown";
import Going from '../../ComptsWIthState/Popups/Going';
import NotGoing from '../../ComptsWIthState/Popups/NotGoing';
import Maybe from '../../ComptsWIthState/Popups/Maybe';
import ItineraryPage from "../../ComptsWIthState/Itinerary/ItineraryPage";


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            guestIsGoing: false,
            guestIsNotGoing: false,
            guestIsMaybe: false,
        }
        
    }
    getSnapshotBeforeUpdate(oldprops) {
        const {reduxRsvpStatus} = this.props

        if (this.props.reduxRsvpStatus !== oldprops.reduxRsvpStatus) {
            switch(reduxRsvpStatus){
                case "Going":
                        this.setState({
                            guestIsGoing: true,
                            guestIsNotGoing: false,
                            guestIsMaybe: false,
                        })
                break;
                case "No, Sorry":
                        this.setState({
                            guestIsGoing: false,
                            guestIsNotGoing: true,
                            guestIsMaybe: false,
                        })
                break;
                case "Maybe": 
                        this.setState({
                            guestIsGoing: false,
                            guestIsNotGoing: false,
                            guestIsMaybe: true,
                        })
                break;
                default: 
                        this.setState({
                            guestIsGoing: false,
                            guestIsNotGoing: false,
                            guestIsMaybe: false,
                        })
            }
        } else {
            return null;
        }
        
      }
        
    render() {
        return (
            <div className="homeComponentDiv">
                <div className="homeParentComponent">
                    <div className="sizer homeHeroDiv">
                        <div className="weddingInfoParent">
                        <div className="weddingInfoDiv">
                        </div>
                            <div className="content">
                            <h1> A Nevins Wedding </h1>
                                <h3>SEPTEMBER 28TH 2019 AT THE PICKERING BARN IN ISSAQUAH, WA</h3> 
                            </div>
                            </div>
                    </div>

                    <div className="sizer white homeInviteFormDiv">
                        <RsvpForm rsvpTitle={"R.S.V.P"} rsvpVerbage={"Let us know if you plan on attending the wedding celebration. If you are not sure if you can attend yet simply select Want to come, but not sure yet and let us know when you make your decision. Please only add guests that have been invited unless your invitation has a plus one on it."}/>
                        {this.state.guestIsGoing  ? <Going open={true}/> : <Going open={false}/>} 
                        {this.state.guestIsNotGoing ? <NotGoing open={true}/> : <NotGoing open={false}/>} 
                        {this.state.guestIsMaybe ? <Maybe open={true}/> : <Maybe open={false}/>} 
                    </div>
                    <div className="sizer red homeItineraryDiv">
                        <Itinerary/>
                    </div>
                    
                    <div className="sizer homeMapDiv">
                        <SimpleMap/>
                    </div>
                    <div className="sizer red registerTripDiv">
                        <div className="giftingRegister">
                            <h1 className="giftRegistryH2">Gift Registry </h1>
                            <p className="giftRegistryDesc">We have been together for over 10 years and we honestly have every physical thing that we could possibly need. However, through our hard work and dedication we have not had the opportunity to explore new lands and cultures as much as we would like. So we ask that if you feel the need to send us a gift you contribute to an advanture that we will remember for a lifetime.</p>
                            <button className="linkToTripRegistry">Visit our Honeyfund</button>
                        </div>
                    </div>
                    <div className="sizer white homeBridalPartyDiv">
                        <div className="fulWidthBridalPartyParent groomesmen-section">
                            <div className="centeredBridalPartydiv">
                                        <div className="bridalPartySectionTitle"><h2>Meet the Groomesmen</h2></div>
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
                                        <div className="bridalPartySectionTitle"><h2>Meet the Bridesmaides</h2></div>
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
                    <div className="sizer red countdownParent"> 
                        <h1 className="homeCountDownH1">Countdown to wedding</h1>
                        <Countdown/>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
       reduxRsvpStatus: state.reduxRsvpStatus,
    }
}
export default connect(mapStateToProps)(Home);
