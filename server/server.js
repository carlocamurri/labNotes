const express = require('express')
const app = express()
fs = require('fs')
url = require('url');
app.use(express.static(__dirname + '/public'));

app.post('/', function(request, respond) {
    var body = '';
    filePath = __dirname + '/public/data.txt';
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))