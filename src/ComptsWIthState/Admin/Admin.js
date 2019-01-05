import React, { Component } from 'react';
import axios from 'axios';
import './admin.css'

export default class Admin extends Component {
    constructor(props){
        super(props)

        this.state = {
            guestArray: [],
        }
    }
    componentDidMount(){
        axios.get('/api/guests')
        .then((resp) => {
            console.log('resp.data', resp.data)
            this.setState({
                guestArray: resp.data
            })
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
    render() {
        console.log('this.state.guestArray', this.state.guestArray)
        let displayGuestArray;
        let displaySubGuests;
        let countGoing = 0;
        let countNotGoing = 0;
        let countMaybe = 0;
        if (this.state.guestArray.length){
            
            displayGuestArray = this.state.guestArray.map((elem) =>{
               console.log('elem.guest_names', elem.guest_names)
                const status = elem.guest_status.toLowerCase();
                if(status === "going"){
                    countGoing = countGoing + elem.guest_names.length
                    return (
                    <div className="guestDiv">
                        <div className="primaryGuestGreen"> {elem.primary_guest} - {elem.guest_status}</div>
                        <div>{elem.guest_names.map((elem) => {
                            return (<div className="secondaryGuest goingGreen">
                                    {elem}
                                </div>)
                        })}</div>
                    </div>
                    )
                } else if(status === "no, sorry" || status === "not going"){
                    countNotGoing =  elem.guest_names.length + countNotGoing
                    console.log('countNotGoing', countNotGoing)
               return(
                   <div className="guestDiv">
                        <div className="primaryGuestRed"> {elem.primary_guest} - {elem.guest_status}</div>
                        <div>{elem.guest_names.map((elem) => {
                            return (<div className="secondaryGuest deadRed">
                                            {elem}
                                    </div>)
                                    })}
                        </div>
                </div>)
                } else {
                    countMaybe = countMaybe + elem.guest_names.length
                    return (
                        <div className="guestDiv">
                        <div className="primaryGuestYellow"> {elem.primary_guest} - {elem.guest_status}</div>
                        <div>{elem.guest_names.map((elem) => {
                            return (<div className="secondaryGuest mellowYellow">
                                            <div className="guestNameText">{elem}</div>
                                    </div>)
                                    })}
                        </div>
                        </div>
                    )
                }
            })
    } else {
        console.log('no length in guest Array')
    }
        return (
            <div>
                <h1 className="adminH1">Guest List</h1><div className="guestNumbers"><h2 className="goingGreen peg"> going: {countGoing}</h2> <h2 className="deadRed peg">not going: {countNotGoing}</h2> <h2 className="mellowYellow peg">not sure: {countMaybe}</h2></div>
                <div className="mainGuestDiv"> {this.state.guestArray.length && displayGuestArray}</div>
            </div>
        );
    }
}