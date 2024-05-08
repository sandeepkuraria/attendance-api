const db = require("../models/Location");

const saveLocation = (req, res) => {
  const { userId, latitude, longitude } = req.body;

  // Validate input
  if (!userId || !latitude || !longitude) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Save location data to the database

  db.saveUserLocation(userId, latitude, longitude, (err, result) => {
    if (err) {
      console.error("Database insertion error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json({ message: "Location data saved successfully" });
  });
};

module.exports = { saveLocation };
