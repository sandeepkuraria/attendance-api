const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");
// const registerController = require("../controllers/registerController");

// Login and Register route
router.post("/login", login);
router.post("/register", register);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const db = require("../../db");

// // Login endpoint
// router.post("/login", (req, res, next) => {
//   const { userId, password, latitude, longitude } = req.body;
//   if (!userId || !password || !latitude || !longitude) {
//     return res.status(400).json({
//       message: "User ID, password, latitude, and longitude are required",
//     });
//   }

//   db.query("SELECT * FROM users WHERE userId = ?", [userId], (err, results) => {
//     if (err) {
//       console.error("Error querying database:", err);
//       return res.status(500).json({ message: "Internal server error" });
//     }

//     if (results.length === 0) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const user = results[0];
//     if (user.password !== password) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Update user's location
//     db.query(
//       "UPDATE users SET latitude = ?, longitude = ? WHERE userId = ?",
//       [latitude, longitude, user.userId],
//       (err, result) => {
//         if (err) {
//           console.error("Error updating user location:", err);
//           return res.status(500).json({ message: "Internal server error" });
//         }
//       }
//     );

//     // Successful login
//     return res.status(200).json({ message: "Login successful" });
//   });
// });

// module.exports = router;
