const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body; //o gal headers naudoti
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
    console.log("User id", user._id);
    const token = jwt.sign({ userID: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    user.token = token;
    await user.save();
    res.status(200).json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Autentifikavimo klaida: " + error.toString() });
  }
};
