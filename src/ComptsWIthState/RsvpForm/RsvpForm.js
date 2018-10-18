import React, { Component } from 'react';
import './rsvpForm.css'

//person object schema  = {invitedBy: invitee, guest_name: name of guest, status: invite response}

export default class RsvpForm extends Component {
    constructor(props){
        super(props)
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.props
        this.state={
            rsvpTitle, 
            rsvpVerbage, 
            typeOfInput,
            addedGuest:[],
            finalGuestArray:[],
            inviteResponse: 'going',
            alertNotification: "",
            showAddGuestButton: false,
            inputPlaceHolder: "enter your name"
        }
        this.addGuest = this.addGuest.bind(this)
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

    addGuest(name){
       /// if there is no invite rsponse that means there hasnt been any response chosen
        if (!this.state.addedGuests){
            //pushGuest assign to New Array for state array
            let pushGuest = this.state.addedGuest.push(name)
            this.setState({
                //set primary for logging in DB
                primaryGuest: name,
                //using addedGuest array for data, rendering under input through map
                addedGuest: pushGuest,
                showAddGuestButton: true,
            })
        } else {
            let pushGuest = this.state.addedGuest.push(name)
            this.setState({
                addedGuest: pushGuest,
            })
        }
        
        axios.post('/api/guestInfo', {guest_name: this.state.guestName, guests_added: this.state.guestsAdded, status_of_guests: this.state.inviteResponse, })
    }
    
    render() {

        console.log('this.state.guestStatus', this.state.guestStatus)
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.state

        //iterate through addedGuest; added conditional to return null if there is nothing in addedGuest State array;
        const guestArray = this.state.addedGuest.map((elem, ind) => {
            if(this.state.addedGuest.length){
            for(var i = 0; i < this.state.addedGuest.length; i++){
            return (<ul>
                    <li className="guestLi">{elem}</li>
                    <div className="xDiv">X</div>
                    </ul>
                    );
            }  
        } else {
            return null;
        } 
        })
        return (
            <div className="rsvpComponentDiv">
                <div className="rsvpParentDiv">
                    <h1 className="rsvpTitle">{rsvpTitle}</h1>
                    <p className="rsvpVerbage">{rsvpVerbage}</p>
                    {/* <form className="rsvpResponseForm">
                <input type={typeOfInput.types.nameOfType} onChange={() => {this.determineInput(typeOfInput.types.nameOfType)}}/>
                    </form> */}
                    <form>
                        <input type="text" onChange={(e)=>{this.addGuest(e.target.value)}} placeholder={this.state.inputPlaceHolder}/> 
                            <div className="guestsAdded">
                                {guestArray}
                            </div>
                        <input type="radio" onChange={(e)=>{this.setState({guestStatus: e.target.value})}}/> 
                        <input type="radio" name="gender" value="Going" checked={this.state.guestStatus === 'Going'}> Yes</input>
                        <input type="radio" name="gender" value="Maybe" checked={this.state.guestStatus === 'Maybe'}> Maybe </input>
                        <input type="radio" name="gender" value="No, Sorry" checked={this.state.guestStatus === 'No, Sorry'}>No</input>
                        <button className="addguestButton" onClick={this.addGuest}>add guest</button>
                    </form>
                </div>
            </div>
        );
        }
    
}