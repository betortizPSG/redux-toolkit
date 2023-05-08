const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

dotenv.config({
    path: 'config/config.env'
})

const app = express();
const port = process.env.PORT;

connectDB();

app.get('/', (req, res) => res.send('Servidor em execução!'));

app.listen(port, () => console.log(`Servidor em execução na port ${port}!`));


