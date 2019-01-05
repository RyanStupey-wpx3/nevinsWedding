import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

const AWS = require('aws-sdk');


AWS.config.region = 'us-east-1';
AWS.config.update({
    credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:673fb79b-02fc-44cd-becc-47187b417a1f'
    }), region: 'us-east-1'});


export function sendInfo(param) {
    AWS.config.credentials.get(function(err) {
        if (err) console.log(err);
        else console.log(AWS.config.credentials);
    }); 
    var lambda = new AWS.Lambda();
    var params = {
        FunctionName: "arn:aws:lambda:us-east-1:131603044023:function:WeddingGuestSaveLambda",
        Payload: JSON.stringify(param)
    };
    lambda.invoke(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}

// import * as serviceWorker from './serviceWorker';



ReactDOM.render(
<Provider store={store}>
<Router>
    <App />
</Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
