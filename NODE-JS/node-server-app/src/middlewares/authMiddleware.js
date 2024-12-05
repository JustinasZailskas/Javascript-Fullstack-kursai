const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ error: "Missing authrization" });
  }
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.userID = decoded.userID;
    const user = await User.findById(decoded.userID);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" + error.toString() });
  }
};

module.exports = authenticateUser;
