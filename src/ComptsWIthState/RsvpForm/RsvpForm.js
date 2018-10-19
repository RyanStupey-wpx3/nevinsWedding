import React, { Component } from 'react';
import './rsvpForm.css';
import axios from 'axios';

//person object schema  = {invitedBy: invitee, guest_name: name of guest, status: invite response}

export default class RsvpForm extends Component {
    constructor(props){
        super(props)
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.props
        this.state={
            rsvpTitle, 
            rsvpVerbage, 
            typeOfInput,
            addedGuests:[],
            stagingGuest: "",
            finalGuestArray:[],
            inviteResponse: 'going',
            alertNotification: "",
            showAddGuestButton: false,
            inputPlaceHolder: "enter your name"
        }
        this.addGuest = this.addGuest.bind(this)
        this.removeGuest = this.removeGuest.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    handleSubmit(event) {
        event.preventDefault();
        event.target.value = "";
      }

    addGuest(name){
        let pushGuest = this.state.addedGuests
       /// if there is no invite rsponse that means there hasnt been any response chosen
        if (!this.state.addedGuests){
            //pushGuest assign to New Array for state array
            pushGuest.push(name)
            this.setState({
                //set primary for logging in DB
                primaryGuest: name,
                //using addedGuest array for data, rendering under input through map
                addedGuests: pushGuest,
                showAddGuestButton: true,
                stagingGuest:"",
            })
        } else {
            pushGuest.push(name)
            this.setState({
                addedGuests: pushGuest,
                stagingGuest:"",
            })
            // axios.post('/api/guestInfo', {guest_name: this.state.guestName, guests_added: this.state.guestsAdded, status_of_guests: this.state.inviteResponse, })
        }
        console.log('this.state.addedGuest', this.state.addedGuests)
    }
        removeGuest(id){
            //deconstruct
            const {addedGuests} = this.state
            //splice at index (id) 
              addedGuests.splice(id, 1)

            //set to new variable name
              let alpha = addedGuests

            //set state to update
             this.setState({
                 addedGuests: alpha,
             })
            }
        //next define and write setGuest metho with dynamic object creation and property fill
    
    
    render() {
        console.log('this.state.addedGuest', this.state.addedGuests)
        console.log('this.state.stagingGuest', this.state.stagingGuest)
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.state
        let guestArray=[]
        //iterate through addedGuest; added conditional to return null if there is nothing in addedGuest State array;
        if(this.state.addedGuests.length){
        guestArray = this.state.addedGuests.map((elem, ind) => {
            
            for(var i = 0; i < this.state.addedGuests.length; i++){
                console.log("ind", ind)
            return (<li  className="guestLi">{elem} <div onClick={() => this.removeGuest(ind)} className="xDiv">x</div></li>);
            }
        })
        } else {
            
            console.log('lello');
        } 
       console.log('guestArray', guestArray)
        return (
            <div className="rsvpComponentDiv">
                <div className="rsvpParentDiv">
                    <h1 className="rsvpTitle">{rsvpTitle}</h1>
                    <p className="rsvpVerbage">{rsvpVerbage}</p>
                    {/* <form className="rsvpResponseForm">
                <input type={typeOfInput.types.nameOfType} onChange={() => {this.determineInput(typeOfInput.types.nameOfType)}}/>
                    </form> */}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={(e)=>{this.setState({stagingGuest: e.target.value})}} placeholder={this.state.inputPlaceHolder} value={this.state.stagingGuest}/> 
                            <div className="guestsAdded">
                            <ul>
                                {guestArray}
                            </ul>
                            </div>
                        <input type="radio" name="gender" value="Going" checked={this.state.inviteResponse === 'Going'}/> Yes 
                        <input type="radio" name="gender" value="Maybe" checked={this.state.inviteResponse === 'Maybe'}/> Maybe
                        <input type="radio" name="gender" value="No, Sorry" checked={this.state.inviteResponse === 'No, Sorry'}/> Sorry, no
                        <button className="addguestButton" onClick={() => this.addGuest(this.state.stagingGuest)}>add guest</button>
                    </form>
                </div>
            </div>
        );
        }
    
}