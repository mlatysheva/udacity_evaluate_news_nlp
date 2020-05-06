var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi')

// set aylien API credentias
var textapi = new aylien({
  application_id: "4ffec548",
  application_key: "8ed2d9ebc469e2b48ea0b4c84d2157e2"
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
