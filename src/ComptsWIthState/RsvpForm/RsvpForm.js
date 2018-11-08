import React, { Component } from 'react';
import './rsvpForm.css';
import axios from 'axios';

let Person = class {
    constructor(name, status, primaryGuest) {
      this.name = name;
      this.status = status;
      this.primaryGuest = primaryGuest
    }
  };

//person object schema  = {invitedBy: invitee, guest_name: name of guest, status: invite response}

export default class RsvpForm extends Component {
    constructor(props){
        super(props)
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.props
        this.state={
            rsvpTitle, 
            rsvpVerbage, 
            typeOfInput,
            primaryGuest:"",
            primaryGuestClassName:"primaryGClass",
            addedGuests:[],
            stagingGuest: "",
            finalGuestArray:[],
            inviteResponse: 'going',
            alertNotification: "",
            showSubmitGuestButton: false,
            inputPlaceHolder: "enter your name",
            deletePrimaryGuests: "",
            YesOrNoBool: false,
            deleteList: "",
        }
        this.addGuest = this.addGuest.bind(this)
        this.removeGuest = this.removeGuest.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.rsvpSubmitMethod = this.rsvpSubmitMethod.bind(this)
        this.responseSelect = this.responseSelect.bind(this)
        this.deletePrimaryGuest = this.deletePrimaryGuest.bind(this)
        this.deleteAllFromGuests =  this.deleteAllFromGuests.bind(this)
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
        console.log('pushGuest', pushGuest)
       /// if there is no invite rsponse that means there hasnt been any response chosen
        if (!this.state.addedGuests.length){
            //pushGuest assign to New Array for state array
            pushGuest.push(name)
            console.log('name', name)
            this.setState({
                //set primary for logging in DB
                primaryGuest: name,
                //using addedGuest array for data, rendering under input through map
                addedGuests: pushGuest,
                showSubmitGuestButton: true,
                stagingGuest:"",
            })
            console.log('this.state.primaryGuest', this.state.primaryGuest)
        } else {
            pushGuest.push(name)
            this.setState({
                addedGuests: pushGuest,
                stagingGuest:"",
            })
        }
        console.log('this.state.addedGuest', this.state.addedGuests)
    }
        removeGuest(id, elem){
            if (elem === this.state.primaryGuest){
                this.setState({
                    deletePrimaryGuest: "you are about to delete the primary guest, doing so will delete all other members of the current list. Would you like to continue??",
                    YesOrNoBool: true,
                })
                return null;
            }

            
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
    
    rsvpSubmitMethod(arr){
<<<<<<< HEAD
<<<<<<< HEAD
        for(var i = 0;i <= arr.length-1; i++){
            // make lowercase
           var beta = this.state.inviteResponse.toLowerCase()
            let obj = new Person(arr[i], beta, this.state.primaryGuest)
=======
        for(var i = 0; i <= arr.length-1; i++){
            let obj = new Person(arr[i], this.state.inviteResponse, this.state.primaryGuest)
            console.log('obj', obj)
>>>>>>> parent of 523896c... further rsvp functionality and validation
=======
        for(var i = 0; i <= arr.length-1; i++){
            let obj = new Person(arr[i], this.state.inviteResponse, this.state.primaryGuest)
            console.log('obj', obj)
>>>>>>> parent of 523896c... further rsvp functionality and validation
            axios.post('/api/guest', obj)
            .then((resp) =>{
                console.log(resp, "was sent back to front-end from db")
            })
            .catch((err) => {
                console.log('err', err)
            })
        }
    }
    responseSelect(event){
        this.setState({
            inviteResponse: event.target.value
        })
    }
    deletePrimaryGuest(event){
        this.setState({
            deleteList: event.target.value
        })
        console.log('this.state.deleteList', this.state.deleteList)
    }
    deleteAllFromGuests(){
        const {addedGuests} = this.state
        if(this.state.deleteList === "yes"){
            //[0,1,2,3,4]
            this.setState({
                addedGuests: [],
                YesOrNoBool: false,
            })
            // return newGuestArray;
           
        } else if(this.state.deleteList === "nevermind"){
            this.setState({
                YesOrNoBool: false,
            })
        }
    }

    render() {
        console.log('this.state.primaryGuest', this.state.primaryGuest) 
        const {rsvpTitle, rsvpVerbage, typeOfInput} = this.state
        let guestArray=[]
        if(this.state.addedGuests.length){
            guestArray = this.state.addedGuests.map((elem, ind) => {
            for(var i = 0; i < this.state.addedGuests.length; i++){
                return (<li  className="guestLi">{elem} <div onClick={() => this.removeGuest(ind, elem)} className="xDiv">X</div></li>);
                }
            })
        } else {
            
            console.log('lello');
        } 
        return (
            <div className="rsvpComponentDiv">
                <div className="rsvpParentDiv">
                    <h1 className="rsvpTitle">{rsvpTitle}</h1>
                    <p className="rsvpVerbage">{rsvpVerbage}</p>
                    {/* <form className="rsvpResponseForm">
                <input type={typeOfInput.types.nameOfType} onChange={() => {this.determineInput(typeOfInput.types.nameOfType)}}/>
                    </form> */}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={(e)=>{this.setState({stagingGuest: e.target.value}); console.log('this.state.stagingGuest', this.state.stagingGuest)}} placeholder={this.state.inputPlaceHolder} value={this.state.stagingGuest}/> 
                        <button className="addguestButton" onClick={() => this.addGuest(this.state.stagingGuest)}>add guest</button>
                        {this.state.YesOrNoBool && 
                                    <div>
                                        <div> {this.state.deletePrimaryGuests} </div>
                                            <input type="radio" onChange={this.deletePrimaryGuest} value="yes" checked={this.state.deleteList === 'yes'}/> Yes 
                                            <input type="radio" onChange={this.deletePrimaryGuest} value="nevermind" checked={this.state.deleteList === 'nevermind'}/> Nevermind
                                            <input type="submit" onClick={() => this.deleteAllFromGuests()} value="reset"/>
                                    </div>
                        }
                            <div className="guestsAdded">
                            <ul>
                                {guestArray}
                            </ul>
                            </div>
                        <input type="radio" name="gender"onChange={this.responseSelect} onClick={() => {console.log('hit 1')}} value="Going" checked={this.state.inviteResponse === 'Going'}/> Yes 
                        <input type="radio" name="gender"onChange={this.responseSelect} value="Maybe" checked={this.state.inviteResponse === 'Maybe'}/> Maybe
                        <input type="radio" name="gender"onChange={this.responseSelect} value="No, Sorry" checked={this.state.inviteResponse === 'No, Sorry'}/> Sorry, no
                        
                        {this.state.showSubmitGuestButton && <button onClick={() => this.rsvpSubmitMethod(this.state.addedGuests)}>submit guests</button>}
                    </form>
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="guestsAdded">
                            <ul className="guestArrayUl">
                                {guestArray}
                            </ul>
                            </div>
=======
>>>>>>> parent of 523896c... further rsvp functionality and validation
=======
>>>>>>> parent of 523896c... further rsvp functionality and validation
                </div>
            </div>
        );
        }
    
}