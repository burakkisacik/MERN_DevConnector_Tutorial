const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env file in order to use environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

//Connect the DataBase
connectDB();

//Body Parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('initial setup');
});

//Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
