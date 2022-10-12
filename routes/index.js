const { hello, updateUser, createUser, addContact, loginUser, logoutUser, deleteUser, getUser, getUserContacts, getContactInfo, startChat, addMessage, getUserContactChat } = require('../controllers/main.controller')
const router = require('express').Router();

// SWAGGER Docs http://localhost:8080/api/docs/

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
// POST http://localhost:8080/api/user/create  req.body  {"username": string ,"email": string,"password": string}
router.post('/user/create', createUser)
// POST http://localhost:8080/api/user/login  req.body  {"email": string,"password": string}
router.post('/user/login', loginUser)
// POST http://localhost:8080/api/user/logout/{id}
router.get('/user/logout/:id', logoutUser)
// GET http://localhost:8080/api/user/delete/{id}
router.get('/user/delete/:id', deleteUser)
// GET http://localhost:8080/api/user/{id}
router.get('/user/:id', getUser)
// GET http://localhost:8080/api/user/{id}/contacts
router.get('/user/:id/contacts', getUserContacts)
// GET http://localhost:8080/api/user/{id}/contact-info  req.body  {"contact_id": string}
router.get('/user/:id/contact-info', getContactInfo)
// PUT http://localhost:8080/api/user/update/{id}  req.body {"username": string, "email": string, "isActive": boolean, "contacts": [string]}           
router.put('/user/update/:id', updateUser)
// PUT http://localhost:8080/api/user/{id}/create-contact  req.body {"contact_id" : "6341f0125a663d9b073d3e04"}
router.put('/user/:id/create-contact', addContact)
// POST http://localhost:8080/api/chat/new-chat  req.body {"id_1": string, "id_2": string, "message_content": string}
router.post('/chat/new-chat', startChat)
// PUT http://localhost:8080/api/chat/add-message  req.body {"id_1": string, "id_2": string, "message_content": string}
router.put('/chat/add-message', addMessage)
// GET http://localhost:8080/api/chat/get-chat-history  req.body {"id_1": string, "id_2": string}
router.get('/chat/get-chat-history', getUserContactChat)

module.exports = router;