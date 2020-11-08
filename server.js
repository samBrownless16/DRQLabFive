const express = require('express')
const app = express()
const port = 3000
const path = require('path') // Path package
const bodyParser = require('body-parser') // Body Parser package

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// get sent via the url
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name); // logs what you type after hello/ to console
    res.send('Hello ' + req.params.name)  // display what you type after hello/ on browser
})

app.get('/api/movies', (req, res) => {
    // JSON data
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.json({movies:mymovies}); // browser displays the JSON mymovies contains
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html') // browser displays our index.html page (__dirname lets express determine directory)
})

app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname) // returns a message with the name you submitted within the form
})

// post sent via the body (keeps data out of url)
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})