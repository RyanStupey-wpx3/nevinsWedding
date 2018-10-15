import React, { Component } from 'react';
import './rsvpForm.css'

export default class RsvpForm extends Component {
    constructor(props){
        super(props)
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.props
        this.state={
            rsvpTitle, 
            rsvpVerbage, 
            typeOfInput
        }
        // this.determineInput = this.determineInput.bind(this)
    }
    // determineInput(typeOfInputObj){
    //     switch(typeOfInputObj){
    //         case nameOfGuestToAdd:
    //         return(this.setState(state => {
    //             state.typeOfInput.types.nameOfType = "text";
    //             return state;
    //           }));
    //         break;
    //         case YesNoMaybe:
    //         return(this.setState(state => {
    //             state.typeOfInput.types.nameOfType = "radio";
    //             return state
    //           }));
    //         break;
    //         case message:
    //         return(this.setState(state => {
    //             state.typeOfInput.types.nameOfType = "textArea";
    //             return state
    //         }));
    //         break;
    //         default: 
    //         return(null)
    //     }
    
    render() {
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.state
        return (
            <div className="rsvpComponentDiv">
                <div className="rsvpParentDiv">
                    <h1 className="rsvpTitle">{rsvpTitle}</h1>
                    <p className="rsvpVerbage">{rsvpVerbage}</p>
                    {/* <form className="rsvpResponseForm">
                <input type={typeOfInput.types.nameOfType} onChange={() => {this.determineInput(typeOfInput.types.nameOfType)}}/>
                    </form> */}
                </div>
            </div>
        );
        }
    
}