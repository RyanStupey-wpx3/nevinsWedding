import React from 'react'
import Popup from 'reactjs-popup'
import './popup.css'
import {connect} from 'react-redux';
import {GETRSVP} from '../../redux/reducer';


class NotGoing extends React.Component {
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
              <h1 className="popupH2">Thats ok!</h1> 
              <hr className="popupHorizontalRule"/>
              <p>Planning for these events and the travel included can be hard. We totally understand if that is not doable for you. Thank you for taking the time to let us know. You have and will contiune to be a big part of our lives and we hope to see you soon!</p>
              <a onClick={this.closeModal}>
              <div className="Xclose" >
                Done
              </div>
              </a>
            </div>
          </Popup>
        </div>
      )
    }
  }
  const mapDispatchToProps = {
    GETRSVP: GETRSVP,
}
  export default connect(() =>{}, mapDispatchToProps)(NotGoing);