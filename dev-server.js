var path = require('path');
var express = require('express');
var webpack = require('webpack');

var app = express();
var compiler = webpack(require('./webpack.config'));

app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src', 'index.html'));
});

app.listen(8080, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:8080');
});
