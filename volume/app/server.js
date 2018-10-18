var config = {
    port:8085
};

var request = require('request');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('pages'));
app.get(['/', '/index.html'], function (req, res) {
   res.sendFile( __dirname + "/pages/" + "index.html" );
});


app.use(function(req, res, next){
    res.status(404);

    //Request method is html. So, return html response
    if (req.accepts('html')) {
        res.sendFile(__dirname + "/pages/" + "error.html")
        return;
    }

    //Request method is json. So, return json response
    if (req.accepts('json')) {
        res.send({ error: 'Invalid request' });
        return;
    }

    //Request method is txt. So, return txt response
    res.type('txt').send('Invalid request');
});


var server = app.listen(config.port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Starting Server");
    console.log("Listening at http://%s:%s", host, port)
})
