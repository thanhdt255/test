const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/node-html'));
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/node-html/index.html'));
})

app.listen(process.env.PORT || 8000, function() {
    console.log(__dirname)
});