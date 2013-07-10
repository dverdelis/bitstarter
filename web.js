var express = require('express');
var fs=require('fs')l;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var outbuf = fs.readFileSync(index.html);
    var outstring = buf.toString(outbuf);
    response.send(outstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
