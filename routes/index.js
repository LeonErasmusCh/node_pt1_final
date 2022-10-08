const { hello, createUser, createHere } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)    
router.get('/user/create', createHere)
router.post('/user/create', createUser)        
           

module.exports = router;