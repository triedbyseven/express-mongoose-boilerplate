require('dotenv').config();
import bodyParser from 'body-parser';
import Express, { Request, Response } from 'express';
require('./config');

const server = Express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (_: Request, res: Response) => {
    console.log('Main route / triggered.');
    res.send('<h1>Hello world!</h1>');
});

server.listen(3000, () => console.log('🚀 Server now ready on http://localhost:3000'));