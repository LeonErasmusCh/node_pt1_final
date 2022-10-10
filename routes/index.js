const { hello, updateUser, createUser, addContact, loginUser, logoutUser, deleteUser, getUser, getUserContacts, getContactInfo } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.post('/user/create', createUser)            
router.post('/user/login', loginUser)
router.get('/user/logout/:id', logoutUser)
router.get('/user/delete/:id', deleteUser)
router.get('/user/:id', getUser)
router.get('/user/:id/contacts', getUserContacts)
router.get('/user/:id/contact-info', getContactInfo)
           
router.put('/user/update/:id', updateUser)  // PUT http://localhost:8080/api/user/update/{id}
router.put('/user/:id/create-contact', addContact) // PUT http://localhost:8080/api/user/{id}/create-contact  req.body {"contact_id" : "6341f0125a663d9b073d3e04"}   

module.exports = router;