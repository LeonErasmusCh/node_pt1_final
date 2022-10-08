const { hello, updateUser, createUser, loginUser, loginRoute } = require('../controllers/main.controller')
const router = require('express').Router();

// Route can be tested at: http://localhost:8080/api/
router.get('/', hello)
router.post('/user/create', createUser)            
router.put('/user/update/:id', updateUser)  // PUT http://localhost:8080/api/user/update/634191f8d1663fb7f988b45f
router.post('/user/login', loginUser)
router.get('/user/login', loginRoute)
           

module.exports = router;