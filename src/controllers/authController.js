const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models/User");

const login = (req, res) => {
  const { userId, password, latitude, longitude } = req.body;

  db.getUserById(userId, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (results.length > 0) {
        const user = results[0];

        // Compare password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.error("Password comparison error: ", err);
            res.status(500).json({ error: "Internal server error" });
          } else {
            
            console.log("you successfully logged in :)");
            if (isMatch) {
              // Password is correct, generate JWT token
              const token = jwt.sign(
                { userId: user.userId },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
              );

            
              db.updateUserLocation(
                latitude,
                longitude,
                userId,
                (err, results) => {
                  if (err) {
                    console.error("Location saving error: ", err);
                    res.status(500).json({ error: "Internal server error" });
                  } else {
                    res.status(200).json({
                      token: token,
                      userId: user.userId,
                      latitude: user.latitude,
                      longitude: user.longitude,
                    });
                  }
                }
              );
            } else {
              console.log(
                "Password comparison failed. Provided password:",
                password,
                "Hashed password from DB:",
                results[0].password
              );
              res.status(401).json({
                error:
                  "Invaliddddddddddddddd credentials" + results[0].password,
                isMatch,
                password,
              });
            }
          }
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  });
};

const register = (req, res) => {
  const { userId, password, latitude, longitude } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Password hashing error: ", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
 
      db.createUser(
        userId,
        hashedPassword,
        latitude,
        longitude,
        (err, results) => {
          if (err) {
            console.error("Database insertion error: ", err);
            res.status(500).json({ error: "Internal server error" });
          } else {
            res.status(200).json({ message: "User registered successfully" });
          }
        }
      );
    }
  });
};


module.exports = { login, register };
