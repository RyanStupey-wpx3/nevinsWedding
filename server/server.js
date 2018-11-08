const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const cors = require('cors');
require('dotenv').config();

const app = express();

// app.use(cors()); 

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING)
.then(dbInstance => app.set('db', dbInstance));

console.log('get guests')
app.get('/api/guests', (req, res, next) => {
    const dbInstance = req.app.get('db')
    
    dbInstance.get_guests()
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log('err', err)
    })
})
console.log('post guests')
app.post('/api/guests', (req, res) => {
    const dbInstance = req.app.get('db')
    const {name, status, primaryGuest} = req.body
    const guest_name = name;
    const guest_status = status;
    const primary_guest = primaryGuest
    console.log('req.body', req.body)
    console.log('guest_name, guest_status, primary_guest', guest_name, guest_status, primary_guest)
    dbInstance.post_guest([guest_name, guest_status, primary_guest])
    .then((resp) => {
        res.status(200).send("db entry confirmed")
    })
    .catch((err) => {
        res.status(500).send('did not enter db')
    })
})
console.log('process.env.DB_CONNECTION_STRING', process.env.DB_CONNECTION_STRING)

const port = 3535;



app.listen(port, () => {console.log(`app is listening on port port`)})