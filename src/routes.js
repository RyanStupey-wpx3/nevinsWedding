import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../src/views/Home/Home";
import Itinerary from "../src/views/Itinerary/Itinerary";
import WhereToStay from "../src/views/WhereToStay/WhereToStay";
import Men from "./views/BridalParty/Men.js";
import Maides from "../src/views/BridalParty/Maides";
import Admin from "../src/ComptsWIthState/Admin/Admin";
import ItineraryPage from "../src/ComptsWIthState/Itinerary/ItineraryPage";

export default <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/itinerary" component={ItineraryPage}/>
    <Route path="/whereToStay" component={WhereToStay}/>
    <Route path="/admin/nevins-wedding" component={Admin}/>
    <Route path="/groomesmen" component={Men}/>
    <Route path="/bridesmaides" component={Maides}/>
</Switch>