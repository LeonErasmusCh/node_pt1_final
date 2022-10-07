require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`${MONGO_URI}`, { useNewUrlParser: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error when trying to connect to the database"))

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));