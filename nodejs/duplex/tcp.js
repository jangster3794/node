var net = require('net'),
    fs = require('fs')

var server = net.createServer(function(connect){
    var log = fs.createWriteStream('hfi.log')
    console.log('Connection established.')
    connection.on('end', function(){
        console.log('Connection ended.')
    })

    connect.write("Welcome.\r\n")
    connect.write('HFI.\r\n')
    connect.pipe(connect).pipe(log)
})

server.listen(5000,function(){
    console.log('Server ready on port 5000')
})