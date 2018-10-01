var http = require("http")
var handleRequest = function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("Welcome ! It is working.")
}

//run using node server

var server = http.createServer(handleRequest)
server.listen(3000,'localhost')
