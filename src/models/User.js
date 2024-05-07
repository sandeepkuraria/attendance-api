const db = require("../config/db");

// const login = (req, res) => {
const getUserById = (userId, callback) => {
  db.query(
    "SELECT * FROM attendancedb.users WHERE userId = ?",
    [userId],
    callback
  );
};
//     (err, results) => {
//       if (err) {
//         return callback(err, null);
//       }
//       if (results.length === 0) {
//         return callback(null, null); // No user found
//       }
//       const user = results[0];
//       return callback(null, user);
//     }
//   );
// };

const createUser = (userId, password, latitude, longitude, callback) => {
  db.query(
    "INSERT INTO attendancedb.users (userId, password, latitude, longitude) VALUES (?, ?, ?, ?)",
    [userId, password, latitude, longitude],
    callback
  );
};
//     (err, result) => {
//       if (err) {
//         return callback(err);
//       }
//       return callback(null);
//     }
//   );
// };

// Update user's location
const updateUserLocation = (latitude, longitude, userId, callback) => {
  db.query(
    "UPDATE users SET latitude = ?, longitude = ? WHERE userId = ?",
    [latitude, longitude, userId],
    callback
  );
};
//     (err, result) => {
//       if (err) {
//         return callback(err);
//       }
//       return callback(null);
//     }
//   );
// };

// module.exports = { createUser, getUserById, updateUserLocation };
module.exports = { getUserById, createUser, updateUserLocation }; // Export the functions properly
