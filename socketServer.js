const express = require('express');
const socketServer = express();

socketServer.use('/', (req, res) => {
    res.send({"message" : "Connected to Socket Server in backend"})
});

module.exports = socketServer;