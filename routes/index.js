const { hello, updateUser, createUser, addContact, loginUser, loginRoute } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.post('/user/create', createUser)            
router.post('/user/login', loginUser)
router.get('/user/login', loginRoute)
           
router.put('/user/update/:id', updateUser)  // PUT http://localhost:8080/api/user/update/{id}
router.put('/user/:id/add-contact', addContact) // PUT http://localhost:8080/api/user/{id}/add-contact      

module.exports = router;