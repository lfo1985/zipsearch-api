require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const connect = require('./db/connect.db');

const ZipCodeRouter = require('./routes/zipcode.route');
const validateToken = require('./middleware/token.middleware');

app.use(cors());
app.use(express.json());
app.use(validateToken);

connect();

app.use('/api/zipcode', ZipCodeRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

app.listen(PORT, () => {
    console.log('Server is running on ' + process.env.API_URL + ':' + PORT + '...');
});