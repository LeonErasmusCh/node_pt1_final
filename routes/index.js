const { hello, updateUser, createUser } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.post('/user/create', createUser)            
router.put('/user/update/:id', updateUser)  // PUT http://localhost:8080/api/user/update/634191f8d1663fb7f988b45f
           

module.exports = router;