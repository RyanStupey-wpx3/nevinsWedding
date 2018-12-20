import React, { Component } from 'react';
import "./countdown.css";

export default class Countdown extends Component {
    constructor(props){
        super(props)

        this.state = {
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
            endDate:""
        }
        this.timer = this.timer.bind(this)
        }
    timer(){
        // Date couting down to
let countDownDate = new Date("Sept 28, 2019 16:00:00").getTime();

// set interval will refresh every second
setInterval(() => {

    // Tells js what the time is right now when the user visits the page
    let now = new Date().getTime();

    // calculates the difference between the countdown date and the current date
    const distance = countDownDate - now;

    // calculates days, hours, min, seconds from distance
    // let months = Math.floor(distancey)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // inserts days, horus, min, and seconds into the 'timer' html
    this.setState({
        days, hours, minutes, seconds
    })

    // Will insert 'The time is now!' instead of timer if the the countdown date is already reached
    if (distance < 0) {
        clearInterval();
        this.setState({
            endDate: "The Time Is Now!"
        }) 
    }

}, 1000)
    }
    componentDidMount(){
        this.timer()
    }
    render() {
        const {days, hours, minutes, seconds} = this.state
        return (
            <div className="timerParent">
               <div className="timerH2"> 
               <div className="boxjr">
                   <h2>{days}</h2>
                   <h4 className="coundownLabels days">days</h4>
                </div>
                <div className="boxjr">
                    <h2 className="hoursNumber">{hours}</h2> 
                    <h4 className="coundownLabels hours">hours</h4>
                </div>
                <div className="boxjr">
                    <h2 className="minuteNumber">{minutes}</h2>
                    <h4 className="coundownLabels minutes">minutes</h4>
                </div>
                <div className="boxjr">
                    <h2 className="secondNumber">{seconds}</h2>
                    <h4 className="coundownLabels seconds">seconds</h4>
                </div>
                </div>
                {/* <div className="coundownLabelsParent"></div> */}
            </div>
        );
    }
}

//pagination****

//donate quick link to seattle human, & big brother