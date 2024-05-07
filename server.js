const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const authMiddleware = require("./src/middleware/authMiddleware");
const authRoutes = require("./src/routes/authRoutes");
const locationRoutes = require("./src/routes/locationRoutes");
// const { authenticateToken } = require("./src/middleware/authMiddleware");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/", locationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//**************************************************************** */
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const db = require("./src/config/db");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Login endpoint
// app.post("/login", (req, res) => {
//   const { userId, password, latitude, longitude } = req.body;

//   // Retrieve user from the database
//   db.query(
//     "SELECT * FROM attendancedb.users WHERE userId = ?",
//     [userId],
//     (err, results) => {
//       if (err) {
//         console.error("Database error: ", err);
//         res.status(500).json({ error: "Internal server error" });
//       } else {
//         if (results.length > 0) {
//           const user = results[0];

//           // Compare password
//           bcrypt.compare(password, user.password, (err, isMatch) => {
//             if (err) {
//               console.error("Password comparison error: ", err);
//               res.status(500).json({ error: "Internal server error" });
//             } else {
//               console.log("Provided password:", password);
//               console.log("Hashed password from DB:", results[0].password);
//               console.log("Is password match:", isMatch);
//               if (isMatch) {
//                 // Password is correct, generate JWT token
//                 const token = jwt.sign(
//                   { userId: user.userId },
//                   process.env.JWT_SECRET,
//                   { expiresIn: "1h" }
//                 );

//                 // Save user's current location
//                 db.query(
//                   "UPDATE attendancedb.users SET latitude = ?, longitude = ? WHERE userId = ?",
//                   [latitude, longitude, userId],
//                   (err, result) => {
//                     if (err) {
//                       console.error("Location saving error: ", err);
//                       res.status(500).json({ error: "Internal server error" });
//                     } else {
//                       res.status(200).json({
//                         token: token,
//                         userId: user.userId,
//                         latitude: user.latitude,
//                         longitude: user.longitude,
//                       });
//                     }
//                   }
//                 );
//               } else {
//                 console.log(
//                   "Password comparison failed. Provided password:",
//                   password,
//                   "Hashed password from DB:",
//                   results[0].password
//                 );
//                 res.status(401).json({
//                   error:
//                     "Invaliddddddddddddddd credentials" + results[0].password,
//                   isMatch,
//                   password,
//                 });
//               }
//             }
//           });
//         } else {
//           res.status(401).json({ error: "Invalid credentials" });
//         }
//       }
//     }
//   );
// });

// // Register endpoint
// app.post("/register", (req, res) => {
//   const { userId, password, latitude, longitude } = req.body;

//   // Hash the password
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) {
//       console.error("Password hashing error: ", err);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       // Insert user into the database with hashed password
//       db.query(
//         "INSERT INTO attendancedb.users (userId, password, latitude, longitude) VALUES (?, ?, ?, ?)",
//         [userId, hashedPassword, latitude, longitude],
//         (err, result) => {
//           if (err) {
//             console.error("Database insertion error: ", err);
//             res.status(500).json({ error: "Internal server error" });
//           } else {
//             res.status(200).json({ message: "User registered successfully" });
//           }
//         }
//       );
//     }
//   });
// });

// // Define a new POST endpoint to receive location data
// app.post("/location", (req, res) => {
//   const { userId, latitude, longitude } = req.body;

//   // Validate input
//   if (!userId || !latitude || !longitude) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   // Save location data to the database
//   db.query(
//     "INSERT INTO attendancedb.locations (userId, latitude, longitude) VALUES (?, ?, ?)",
//     [userId, latitude, longitude],
//     (err, result) => {
//       if (err) {
//         console.error("Database insertion error: ", err);
//         return res.status(500).json({ error: "Internal server error" });
//       }
//       res.status(200).json({ message: "Location data saved successfully" });
//     }
//   );
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
