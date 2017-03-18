import express from 'express';
import path from 'path';

const index = express.Router();

index.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

export default index;