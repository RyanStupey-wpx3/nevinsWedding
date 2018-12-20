import React from 'react'
import Popup from 'reactjs-popup'


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
      this.setState({ open: false })
    }
  
    render() {
      return (
        <div>
          <button className="button" onClick={this.openModal}>
            Controlled Popup
          </button>
          <Popup
            open={this.props.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <a className="close" onClick={this.closeModal}>
                Done&times;
              </a>
              <p>Be sure to check out the information on where to stay and where the party is at. Doors open at 6:30PM and the ceremony will start promtly at 7:00PM.</p>
              <p>Parking is available outside the barn and there is overflow parking next door on the top floor of the Costco parking garage.</p>
              <p>See you there!</p>
            </div>
          </Popup>
        </div>
      )
    }
  }
  export default Maybe;