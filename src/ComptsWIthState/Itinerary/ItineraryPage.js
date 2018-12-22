import React, { Component } from 'react';
import './itineraryPage.css'

export default class ItineraryPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            numberOfBridesmaides: this.props.numberOfBridesmaides,
            numberOfdivs: this.props.numberOfDivs,
            temporaryTxt: " o akldcm akmv k ldkv dkmskmvdpo d vkmsm lksmdkx mvkm skmv mkvkmsm lksmdkx mvkm skmv mkvkmsm lksmdkx mvkm skmv mkvkmsm lksmdkx mvkm skmv mkvkmsm lksmdkx mvkm skmv mkddi vosdo oco  vn kzxkv akv ckc kcakdcvmamvvn kzxkv akv ckc kcakdcvmamvvn kzxkv akv ckc kcakdcvmamvvn kzxkv akv ckc kcakdcvmamvvn kzxkv akv ckc kcakdcvmamv skdvm sd kmsd msdvm vkssdmvxkvm adkmsklmvsmslfvm skdmms kmd mdk kmsm kdmlskmvlkfmlksfm dkmckmvk dkm km kdm km km lksdm mkdkmlv"

        }
    }
    render() {
        const displayNumberOfBridesmaides = () => {
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
                <h2>itinerary</h2>
                <div className="sizer HeroDiv"></div>
                <div className="sizer white">
                    <div className="bridalPartyInnerPlacementDiv">
                    <div className="imgDiv1">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner descriptionPage">
                            <h2 className="groomsmenTitle">title Here</h2>
                            <p className="descriptionParagraph"><p className="locationDesc locationD2">
                        Soufflé wafer sweet caramels liquorice. Sweet cotton candy toffee sesame snaps croissant cake. Fruitcake jelly-o candy canes pie chocolate bar. Macaroon tootsie roll biscuit tart lollipop marzipan chocolate bar. Jujubes dragée candy canes.
                        </p></p>
                        </div>
                    </div>
                </div>
                <div className="sizer red">
                    <div className="bridalPartyInnerPlacementDiv">
                    <div className="imgDiv1">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner descriptionPage">
                            <h2 className="groomsmenTitle">title Here</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
                <div className="sizer white">
                    <div className="bridalPartyInnerPlacementDiv">
                    <div className="imgDiv1">{/* <img className="bridalPartyInnerImage" src={require('')}/> */}</div>
                        <div className="bridalPartyInner descriptionPage">
                            <h2 className="groomsmenTitle">title Here</h2>
                            <p className="descriptionParagraph">{this.state.temporaryTxt}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}