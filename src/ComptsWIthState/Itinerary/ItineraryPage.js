import React, { Component } from 'react';
import '../../App.css'
// uses styles from./bridalParty.css'
export default class ItineraryPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            numberOfGroomesMen: this.props.numberOfGroomesmen,
            numberOfdivs: this.props.numberOfDivs,
            temporaryTxt: " osd kmsd msdvm vkssdmvxkvm adkmsklmvsmslfvm skdmms kmd mdk kmsm kdmlskmvlkfmlksfm dkmckmvk dkm km kdm km km lksdm mkdkmlv"
        }
    }
    render() {
        const displayNumberOfGroomesmen = () => {
            return(
                <div className="bridalPartyIndividualParent">
                    <div className="bridalPartyindividualImageDiv">
                        {/* <img src={require()}/> */}
                    </div>
                    <p className="bridalPartyIndividualdescription"></p>
                </div>
            );
        }
        return (
            <div>
                <h2 className="titleH2">Itinerary</h2>
                <div className="sizer HeroDiv"></div>
                <div className="sizerForBridal white">
                    <div className="bridalPartyInnerPlacementDiv">
                    {/* insert photos of bridesmaide in img tag below */}
                        <div className="imgDiv">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner description">
                            <h2 className="sectionTitle">Rehearsal Dinner</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
                <div className="sizerForBridal red ">
                    <div className="bridalPartyInnerPlacementDiv">
                    {/* insert photos of bridesmaide in img tag below */}
                        <div className="imgDiv">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner description">
                        <h2 className="sectionTitle">Ceremony</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
                <div className="sizerForBridal white">
                    <div className="bridalPartyInnerPlacementDiv">
                    {/* insert photos of bridesmaide in img tag below */}
                        <div className="imgDiv">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner description">
                            <h2 className="sectionTitle">Title Here</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
                <div className="sizerForBridal red">
                    <div className="bridalPartyInnerPlacementDiv">
                    {/* insert photos of bridesmaide in img tag below */}
                        <div className="imgDiv">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner description">
                            <h2 className="sectionTitle">Title Here</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
                <div className="sizerForBridal white">
                    <div className="bridalPartyInnerPlacementDiv">
                    {/* insert photos of bridesmaide in img tag below */}
                        <div className="imgDiv">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner description">
                            <h2 className="sectionTitle">Title Here</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}