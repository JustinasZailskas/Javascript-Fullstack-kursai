const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../services/authService");
const AppError = require("../utils/errors/AppError");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new AppError("Iveskite el. pašto adresa ir slaptazodą", 400);
    }
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      throw new AppError(
        "Iveskite username arba el. pasta arba slaptazodi",
        400
      );
    }
    const user = await authService.register(username, email, password);
    res.json(user);
  } catch (error) {
    // if (error.message === "Email already in use") {
    //   throw new AppError("Toks el. paštas jau naudojamas", 400);
    // } else {
    // throw new AppError("Registracijos klaida: " + error.message, 500);
    // }
    next(error);
  }
};
