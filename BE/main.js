const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');

app.use(cors());
app.use( bodyParser.json() ); 

app.get('/', function (req, res) {
    console.log(req)
    res.send('Hello World!')
})

app.post('/login', function (req, res) {
    const {login, pass} = req.body;
    if(login === "admin" && pass === "admin") {
        res.send(JSON.stringify({isAuthenticated: true}));
    } else {
        res.send(JSON.stringify({isAuthenticated: false}));
    }
})

const server = app.listen(5000, function () {
    console.log('Node server is running..');
});