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

app.post(('/api/guests', (req, res) => {
    const dbInstance = req.app.get('db')
    const person = req.body

    dbInstance.post_guest([person])
    .then((resp) => {
        res.status(200).send("db entry confirmed")
    })
    .catch((err) => {
        res.status(500).send('did not enter db', err)
    })
}))

const port = 3535;



app.listen(port, () => {console.log(`app is listening on port port`)})