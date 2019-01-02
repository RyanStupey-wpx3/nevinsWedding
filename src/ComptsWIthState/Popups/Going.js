import React from 'react'
import Popup from 'reactjs-popup'
import {connect} from 'react-redux';
import {GETRSVP} from '../../redux/reducer';

import './popup.css'

class Going extends React.Component {
    constructor(props) {
      super(props)
      this.state = { open: false }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
  
    }
    openModal (){
      this.setState({ open: true })
    }
    closeModal () {
      this.props.GETRSVP("")
      this.setState({ open: false })
    }
  
    render() {
      return (
        <div className="popupParent">
          <Popup 
            open={this.props.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <h1 className="popupH2">We cant wait to see you!</h1> 
              <hr className="popupHorizontalRule"/>
              <p>Be sure to check out the information on where to stay and where the party is at. Doors open at 6:30PM and the ceremony will start promtly at 7:00PM.</p>
              <p className="goingParkingInfo">Parking is available outside the barn and there is overflow parking next door on the top floor of the Costco parking garage.</p>
              <p>See you there!</p>
              <div className="Xclose" >
              <a onClick={this.closeModal}>
                Done
              </a>
              </div>
            </div>
          </Popup>
        </div>
      )
    }
  }
  const mapDispatchToProps = {
    GETRSVP: GETRSVP,
}
  export default connect(() =>{}, mapDispatchToProps)(Going);