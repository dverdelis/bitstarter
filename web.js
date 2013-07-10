var express = require('express');
var fs=require('fs')l;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var outtext = fs.readFileSync(index.html);
    response.send(outtext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
