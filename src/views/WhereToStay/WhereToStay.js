import React, { Component } from 'react';

export default class WhereToStay extends Component {
    render() {
        return (
            <div className="whereToStayComponentDiv">
                <div className="white ">
                    <div className="locationDetails">
                        {/* <img className="locationImg1" src={require("#")}/> */}
                        <h2 className="locationName1"></h2>
                        <p className="locationDescription"></p>
                    </div>
                </div>
                <div className="red ">
                    <div className="locationDetails">
                        {/* <img className="locationImg2" src={require("#")}/> */}
                        <h2 className="locationName2"></h2>
                        <p className="locationDescription"></p>
                    </div>
                </div>
                <div className="white ">
                    <div className="locationDetails">
                        {/* <img className="locationImg3" src={require("#")}/> */}
                        <h2 className="locationName3"></h2>
                        <p className="locationDescription"></p>
                    </div>
                </div>
                <div className="red ">
                    <div className="locationDetails">
                        {/* <img className="locationImg4" src={require("#")}/> */}
                        <h2 className="locationName4"></h2>
                        <p className="locationDescription4"></p>
                    </div>
                </div>
                <div className="white ">
                    <div className="locationDetails">
                        {/* <img className="locationImg5" src={require("#")}/> */}
                        <h2 className="locationName5"></h2>
                        <p className="locationDescription5"></p>
                    </div>
                </div>
            </div>
        );
    }
}