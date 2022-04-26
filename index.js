
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})

require('dotenv').config();

const mongoString = 'mongodb+srv://officialbidisha1:Schatterjee5511$$SS@clusterflym.gamwr.mongodb.net/test'
mongoose.connect(mongoString);
const database = mongoose.connection

const routes = require('./routes/routes');
app.use('/api', routes)
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


