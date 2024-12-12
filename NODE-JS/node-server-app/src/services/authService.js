const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/errors/AppError");

class AuthService {
  async login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign({ userID: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    await userRepository.updateToken(user, token);
    return token;
  }

  async register(username, email, password) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new AppError("Email already in use", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await userRepository.create({
      username,
      email,
      password: hashedPassword,
    });
  }
}

module.exports = new AuthService();
