const db = require("../config/db");

const saveUserLocation = (userId, latitude, longitude, callback) => {
  db.query(
    "INSERT INTO attendancedb.locations (userId, latitude, longitude) VALUES (?, ?, ?)",
    [userId, latitude, longitude],
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
module.exports = { saveUserLocation };
