import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));

