import React, { Component } from 'react';


export default class Itinerary extends Component {
    constructor(props){
        super(props)
        const {picture1Image, dateAndTIme, description, linkToMoreUrl} = this.props;
        this.state = {
            picture1Image: picture1Image,
            picture2Image: picture2Image,
            picture3Image: picture3Image,
            dateAndTIme: dateAndTIme,
            description: description,
            linkToMoreUrl: linkToMoreUrl,
            tab1:{
                description: this.props.tab1description,
                ItineraryDescription: this.props.tab1.ItineraryDescription
            },
            tab2:{
                description: this.props.tab2description,
                ItineraryDescription: this.props.tab2.ItineraryDescription
            },
            tab3:{
                description: this.props.tab3description,
                ItineraryDescription: this.props.tab3.ItineraryDescription
            },
        };
    }
    render() {
        return (
            <div className="ItineraryComponentDiv">
                <div className="ItineraryComponentParent">
                    <div className="tab1">
                    <img src={require(this.state.picture1Image)}/>

                        <div className="dateAndTime">
                            <p>{this.state.tab1.description}</p>
                        </div>
                    

                        <div className="itineraryDescription">
                            <p className="tab tab1ItinDesc">{this.state.tab1.ItineraryDescription}</p>
                        </div>
                    </div>
                    <div className="tab2">
                    <img src={require(this.state.picture2Image)}/>
                        <div className="dateAndTime">
                            <p>{this.state.tab2.description}</p>
                        </div>
                    
                        <div className="itineraryDescription">
                            <p className="tab tab2ItinDesc">{this.state.tab2.ItineraryDescription}</p>
                        </div>
                    </div>

                    <div className="tab3">
                    <img src={require(this.state.picture3Image)}/>
                        <div className="dateAndTime">
                            <p>{this.state.tab3.description}</p>
                        </div>
                    
                        <div className="itineraryDescription">
                            <p className="tab tab3ItinDesc">{this.state.tab3.ItineraryDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}