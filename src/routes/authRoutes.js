const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");

// Login and Register route
router.post("/login", login);
router.post("/register", register);

module.exports = router;
