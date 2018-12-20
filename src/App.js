import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from '../src/routes';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="logoHeaderDiv"> <div style={{float: "right"}} className="links"><Link to="/itineraryPage"><div className="linkButton ItineraryView">Itinerary</div></Link><Link to="/whereToStay"><div className="linkButton WhereToStayView">Where to stay</div></Link></div></div>
                   
        {routes}
        <footer className="foot"><a>#nevinsWedding</a></footer>
      </div>
    );
  }
}

export default App;
