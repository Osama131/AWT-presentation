const express = require("express");
const router = express.Router();
const { loginUser, dashboard, logout } = require('../controller/controller');
const { checkAuth } = require('../middleware/middleware');

// Login user route
router.post('/login', loginUser);

// Route for dashboard
router.get('/dashboard', checkAuth, dashboard);

// Route for logout
router.get('/logout', logout);

module.exports = router;
