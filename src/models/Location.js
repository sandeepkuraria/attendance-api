const db = require("../config/db");

const saveUserLocation = (userId, latitude, longitude, callback) => {
  db.query(
    "INSERT INTO locations (userId, latitude, longitude) VALUES (?, ?, ?)",
    [userId, latitude, longitude],
    callback
  );
};

module.exports = { saveUserLocation };
