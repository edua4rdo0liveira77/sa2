const express = require('express');
const { registerUser } = require('./registerUser.cjs');
const { loginUser } = require('./loginUser.cjs');
const router = express.Router();

router.post('/cadastro', registerUser);
router.post('/login', loginUser)

module.exports = router;