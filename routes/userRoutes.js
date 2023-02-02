const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

// * Register User
router.post('/register', registerUser);

// * Login User
router.post('/login', loginUser);

// * Current User Info
router.get('/current', validateToken, currentUser);

module.exports = router;
