import React, { Component } from 'react';

export default class HeroImage extends Component {
    constructor(props){
        super(props)

        this.state = {
            heroImagUrl: this.props.heroImageUrl,
        }
    }
    render() {
        return (
            <div className="HeroComponentDiv">,
                <div style={{backgroundImage: this.state.heroImagUrl}} className="HeroComponentParent">
                    {/* <img className="heroSrcImage" alt="hero image" src={require(this.state.heroImageUrl)}/> */}
                </div>
            </div> 
        );
    }
}