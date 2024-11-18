const User = require("../models/user");
const bcrypt = require("bcrypt");

const authenticateUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Iveskite el. pasta arba slaptazodi" });
  }
  try {
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordCorrect) {
      return res
        .status(401)
        .json({ error: "Neteisingi prisijungimo duomenys" });
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Autentifikavimo klaida: " + error.toString() });
  }
};

module.exports = authenticateUser;
