const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { email, password } = req.body; 
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Iveskite el. pasta arba slaptazodi" });
  }

  try {
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    if (error.message === 'Invalid credentials') {
      res.status(401).json({ error: "Neteisingi prisijungimo duomenys" });
    } else {
      res.status(500).json({ error: "Autentifikavimo klaida: " + error.message });
    }
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const user = await authService.register(username, email, password);
    res.json(user);
  } catch (error) {
    if (error.message === 'Missing required fields') {
      res.status(400).json({ error: "Iveskite username arba el. pasta arba slaptazodi" });
    } else if (error.message === 'Email already in use') {
      res.status(400).json({ error: "Email jau naudojamas" });
    } else {
      res.status(500).json({ error: "Registracijos klaida: " + error.message });
    }
  }
};
