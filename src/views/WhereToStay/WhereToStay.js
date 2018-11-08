import React, { Component } from 'react';
import './whereToStay.css'
// import '../../App.css'
export default class WhereToStay extends Component {
    constructor(props){
        super(props)
        this.state = {
            tempText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, ",
            title: "this is title",
        }
    }
    render() {
        return (
            <div className="whereToStayComponentDiv">
            <h2>where to stay</h2>
                <div className="sizer whereHeroDiv"></div>
                <div className="white sizer">
                    <div className="locationDetails">
                    <div className="locationImgDiv"> {/* <img className="locationImg1" src={require("#")}/> */}</div>
                        <div className="locationDescriptionParent">
                            <h2 className="locationName1 name">{this.state.title}</h2>
                            <p className="locationDescription">{this.state.tempText} </p>
                        </div>
                    </div>
                </div>
                <div className="red sizer">
                    <div className="locationDetails">
                    <div className="locationImgDiv">{/* <img className="locationImg2" src={require("#")}/> */}</div>
                        <div className="locationDescriptionParent">
                            <h2 className="locationName2 name">{this.state.title}</h2>
                            <p className="locationDescription">{this.state.tempText} </p>
                        </div>
                    </div>
                </div>
                <div className="white sizer">
                    <div className="locationDetails">
                    <div className="locationImgDiv"> {/* <img className="locationImg3" src={require("#")}/> */}</div>
                        <div className="locationDescriptionParent">
                            <h2 className="locationName3 name">{this.state.title}</h2>
                            <p className="locationDescription">{this.state.tempText}</p>
                        </div>
                    </div>
                </div>
                <div className="red sizer">
                    <div className="locationDetails">
                    <div className="locationImgDiv">{/* <img className="locationImg4" src={require("#")}/> */}</div>
                        <div className="locationDescriptionParent">
                            <h2 className="locationName4 name">{this.state.title}</h2>
                            <p className="locationDescription">{this.state.tempText}</p>
                        </div>
                    </div>
                </div>
                <div className="white sizer">
                    <div className="locationDetails">
                    <div className="locationImgDiv"> {/* <img className="locationImg5" src={require("#")}/> */}</div>
                        <div className="locationDescriptionParent">
                            <h2 className="locationName5 name">{this.state.title}</h2>
                            <p className="locationDescription">{this.state.tempText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}