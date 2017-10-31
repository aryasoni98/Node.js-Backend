var file = require('fs');

function readFile(callback) {
    file.readFile('./file', function(err, data) {
        callback(data);
    })

}

function writeFile(data, callback) {
    file.writeFile('./file', data, function(err) {
        file.readFile('./file', function(err, data) {
            callback(data.toString());
        })



    })

}

module.exports = {
    "readfile": readFile,
    "writefile": writeFile
}
