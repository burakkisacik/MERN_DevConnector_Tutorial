const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env file in order to use environment variables
dotenv.config({ path: './config/config.env' });

//Connect the DataBase
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('initial setup');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
