const db = require("../config/db");

// // Function to set the timezone for the MySQL database to +05:30 (India Standard Time)
// const setDatabaseTimezone = () => {
//   db.query("SET GLOBAL time_zone = '+05:30'", (err, result) => {
//     if (err) {
//       console.error("Error setting database timezone: " + err.stack);
//       return;
//     }
//     console.log("Database timezone set to +05:30 (India Standard Time)");
//   });
// };


// Function to create the locations table if it doesn't exist
const createLocationsTable = () => {
  db.query(`
    CREATE TABLE IF NOT EXISTS locations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      userId INT NOT NULL,
      latitude DECIMAL(10, 8) NOT NULL,
      longitude DECIMAL(11, 8) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err, result) => {
    if (err) {
      console.error("Error creating locations table: " + err.stack);
      return;
    }
    console.log("Locations table created or already exists");
  });
};

// Function to save user location to the database
const saveUserLocation = (userId, latitude, longitude, callback) => {
  // db.query(`SET time_zone = '+05:30'`); // Set session time zone to Indian Standard Time

  db.query(
    "INSERT INTO locations (userId, latitude, longitude) VALUES (?, ?, ?)",
    [userId, latitude, longitude],
    callback
  );
};

// Export the saveUserLocation function and call createLocationsTable to create the table
module.exports = { saveUserLocation };


// Call the function to set the database timezone and create the locations table
// setDatabaseTimezone();
createLocationsTable();