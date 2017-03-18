import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import mongoose from 'mongoose';
import * as firebase from 'firebase';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js'

import api from './routes/api.js';
import dev from './routes/dev.js';
import index from './routes/index.js';

const app = express();
const compiler = webpack(webpackConfig);

// mongoose.connect('mongodb://admin:admin@ds135690.mlab.com:35690/ruhacks', function(err){
//     if (err) {
//         throw err;
//     } else {
//         console.log("Successfully connected to database.");
//     }
// });

var config = {
    apiKey: "AIzaSyDckD6w56UPP8mHh9pZcP5pelwnWiOIBCM",
    authDomain: "ruhacks-18f97.firebaseapp.com",
    databaseURL: "https://ruhacks-18f97.firebaseio.com",
    storageBucket: "ruhacks-18f97.appspot.com",
    messagingSenderId: "554810154725"
};
firebase.initializeApp(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.use('/client', express.static(__dirname + '/client'));
app.use('/content', express.static(__dirname + '/client/content'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/api', api);
app.use('/dev', dev);
app.use('/', index);

app.use(function(req, res){
    let err = new Error('Not Found');
    err.status = 404;
    res.json({message: "404 Not Found", req: req.url});
});
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.status(status).json('error', {
        message: err.message,
        error: err
    });
});

app.set('port', 3000);

const server = http.createServer(app);
server.listen(3000);
server.on('error', function(err){
    if (err.syscall !== 'listen') {
        throw err;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (err.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw err;
    }
});
server.on('listening', function(){
    console.log('Server running on port 3000')
});