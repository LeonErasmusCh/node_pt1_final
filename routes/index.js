const { hello, userUpdate, createUser } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.put('/user/update', userUpdate)  
router.post('/user/create', createUser)            
           

module.exports = router;