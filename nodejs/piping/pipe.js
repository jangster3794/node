var fs = require('fs')
var stream = fs.createReadStream('../streaming/data.json'),
    writable = fs.createWriteStream('data_copy.json')
stream.pipe(process.stdout)
stream.pipe(writable)