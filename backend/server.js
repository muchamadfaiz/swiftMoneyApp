const express = require('express');
const logger = require('morgan');
const { connectDB } = require('./configDB');
require('dotenv').config({ path: './backend/.env' });
const app = express();
// require('dotenv').config();

app.use(logger('dev'));
app.get('/', (req, res) => {
    res.send('Welcome to swiftMoneyApp!!');
})
app.listen(process.env.PORT, async () => {
    console.log('Server is running on port:', process.env.PORT);
    await connectDB();
})