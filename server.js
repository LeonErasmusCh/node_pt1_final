require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./data/swagger.json');
const cors = require('cors')
const socketServer = require('./socketServer')

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

//const socketServer = express();
socketServer.use(express.json())
const SOCKETPORT = process.env.SOCKETPORT || 4001

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 
    origin: '*'
}))


routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swaggerDocument));

mongoose.connect(`${MONGO_URI}`, { useNewUrlParser: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error when trying to connect to the database"))



app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
socketServer.listen(SOCKETPORT, () => console.log(`SocketServer running at http://localhost:${SOCKETPORT}`));