const express = require('express');
const app = express();
fs = require('fs')
url = require('url');
path = require("path");
morgan = require("morgan");

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => console.log('App listening on port 5000!'));
