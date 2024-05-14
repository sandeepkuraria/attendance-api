const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const locationRoutes = require("./src/routes/locationRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/", locationRoutes);
app.get("/", (req, res) => {
  res.send("Sandeep you just deployed your API yay!!!!!!!!!!!!!..................");
});
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
