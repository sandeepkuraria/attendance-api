const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // const token = req.headers.authorization;

  // if (!token) {
  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized: Missing token" });
  } else {
    const token = authHeader.split(" ")[1]; // Extract token from Bearer header

    // console.log("Token from authenticatToken backend:", token); // Log the token value

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Unauthorized: Invalid token" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
};
