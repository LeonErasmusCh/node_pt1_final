const { hello, updateUser, createUser, addContact } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.post('/user/create', createUser)            
router.put('/user/update/:id', updateUser)  // PUT http://localhost:8080/api/user/update/{id}
router.put('/user/:id/add-contact', addContact) // PUT http://localhost:8080/api/user/{id}/add-contact      

module.exports = router;