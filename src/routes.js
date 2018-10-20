import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../src/views/Home/Home";
import Itinerary from "../src/views/Itinerary/Itinerary";
import WhereToStay from "../src/views/WhereToStay/WhereToStay";
import Admin from "../src/ComptsWIthState/Admin/Admin";

export default <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Itinerary" component={Itinerary}/>
    <Route exact path="/WhereToStay" component={WhereToStay}/>
    <Route exact path="/admin/nevins-wedding" component={Admin}/>
</Switch>