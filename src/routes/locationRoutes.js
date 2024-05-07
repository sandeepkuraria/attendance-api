const express = require("express");
const router = express.Router();
const { saveLocation } = require("../controllers/locationController");
const { authenticateToken } = require("../middleware/authMiddleware");

// Route to save location data
router.post("/location", authenticateToken, saveLocation);

module.exports = router;
