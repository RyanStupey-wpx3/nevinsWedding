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
        let displayGuestArray;
        if (this.state.guestArray.length){
            displayGuestArray = this.state.guestArray.map((elem) =>{
                const status = elem.guest_status.toLowerCase();
                if(status === "going"){
                    return (
                    <div className="goingGreen guestDiv">
                        <hr/>
                        <div>{elem.guest_name}</div>
                        <div>{elem.guest_status}</div>
                        <hr/>
                    </div>
                    )
                } else if(status === "no, sorry" || status === "not going"){
               return(
                   <div className="deadRed guestDiv">
                    <hr/>
                    <div>{elem.guest_name}</div>
                    <div>{elem.guest_status}</div>
                    <hr/>
                </div>)
                } else {
                    return (
                        <div className="mellowYellow guestDiv">
                        <hr/>
                        <div>{elem.guest_name}</div>
                        <div>{elem.guest_status}</div>
                        <hr/>
                        </div>
                    )
                }
            })
    } else {
        console.log('no length in guest Array')
    }
        return (
            <div>
                <h1>Guest List</h1>
                {this.state.guestArray.length && displayGuestArray}
            </div>
        );
    }
}