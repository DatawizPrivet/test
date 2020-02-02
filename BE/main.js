const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');

app.use(cors());
app.use( bodyParser.json() ); 


app.post('/login', function (req, res) {
    const {login, pass} = req.body;
    if(login === "admin" && pass === "admin") {
        res.send(JSON.stringify({isAuthenticated: true}));
    } else {
        res.send(JSON.stringify({isAuthenticated: false}));
    }
})

app.get("/data", function (req, res) {
    const data = [
        {
            key: 0,
            date: '2018-02-11',
            a: 1,
            b: 18,
        },
        {
            key: 1,
            date: '2018-03-11',
            a: 2,
            b: 17,
        },
        {
            key: 2,
            date: '2018-04-11',
            a: 3,
            b: 16,
        },
        {
            key: 3,
            date: '2018-05-11',
            a: 4,
            b: 15,
        },
        {
            key: 4,
            date: '2018-06-11',
            a: 5,
            b: 14,
        },
        {
            key: 5,
            date: '2018-07-11',
            a: 6,
            b: 13,
        },
        {
            key: 6,
            date: '2018-08-11',
            a: 7,
            b: 12,
        },
        {
            key: 7,
            date: '2018-09-11',
            a: 8,
            b: 11,
        },
        {
            key: 8,
            date: '2018-10-11',
            a: 9,
            b: 10,
        },
        {
            key: 9,
            date: '2018-11-11',
            a: 10,
            b: 9,
        },
        {
            key: 10,
            date: '2018-12-11',
            a: 11,
            b: 8,
        },
        {
            key: 11,
            date: '2018-13-11',
            a: 12,
            b: 7,
        },
        {
            key: 12,
            date: '2018-14-11',
            a: 13,
            b: 6,
        },
        {
            key: 13,
            date: '2018-15-11',
            a: 14,
            b: 5,
        },
        {
            key: 14,
            date: '2018-16-11',
            a: 15,
            b: 4,
        },
        {
            key: 15,
            date: '2018-17-11',
            a: 16,
            b: 3,
        },
        {
            key: 16,
            date: '2018-18-11',
            a: 17,
            b: 2,
        },
        {
            key: 17,
            date: '2018-19-11',
            a: 18,
            b: 1,
        },
    ]
    res.send(JSON.stringify(data))
})

const server = app.listen(5000, function () {
    console.log('Node server is running..');
});