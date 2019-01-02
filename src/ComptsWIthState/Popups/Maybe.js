import React from 'react'
import Popup from 'reactjs-popup'
import {connect} from 'react-redux';
import {GETRSVP} from '../../redux/reducer';

import './popup.css'

class Maybe extends React.Component {
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
              <h1 className="popupH2">Just let us know!</h1> 
              <hr className="popupHorizontalRule"/>
              <p>We totally understand that these things can be hard to plan and pay for. We will save your seat just let us know when you have offically made your decision.</p>
              <p className="whenUknow">When you do know if you will be able to attend, just fill out the RSVP form again with your new response and we will update the list.</p>
              <p className="hope2See">Hope to see you soon!</p>
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
  export default connect(() =>{}, mapDispatchToProps)(Maybe);