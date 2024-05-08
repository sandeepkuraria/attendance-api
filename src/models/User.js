const db = require("../config/db");

const getUserById = (userId, callback) => {
  db.query(
    "SELECT * FROM users WHERE userId = ?",
    [userId],
    callback
  );
};


const createUser = (userId, password, latitude, longitude, callback) => {
  db.query(
    "INSERT INTO users (userId, password, latitude, longitude) VALUES (?, ?, ?, ?)",
    [userId, password, latitude, longitude],
    callback
  );
};

// Update user's location
const updateUserLocation = (latitude, longitude, userId, callback) => {
  db.query(
    "UPDATE users SET latitude = ?, longitude = ? WHERE userId = ?",
    [latitude, longitude, userId],
    callback
  );
};
module.exports = { getUserById, createUser, updateUserLocation }; // Export the functions properly
