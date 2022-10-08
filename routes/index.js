const { hello, updateUser, createUser, addContact } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.post('/user/create', createUser)            
router.put('/user/update/:id', updateUser)  // PUT http://localhost:8080/api/user/update/{id}
router.put('/user/:id/create-contact', addContact) // PUT http://localhost:8080/api/user/{id}/create-contact  req.body {"contact_id" : "6341f0125a663d9b073d3e04"}   

module.exports = router;