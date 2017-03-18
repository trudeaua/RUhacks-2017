import express from 'express';

const dev = express.Router();

dev.get('/', function(req, res){
    res.send("Hello World")
});

export default dev;