import { Router } from "express";
import bcrypt from 'bcryptjs';
import user from "../models/user.js";
import jwt from "jsonwebtoken"

const router = Router();

// SignUp API
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SignIn API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
console.log("user",email,password);


try {
  const foundUser = await user.findOne({ email });
  if (!foundUser) return res.status(400).json({ message: 'User not found!' });
  
  const isPasswordValid = await bcrypt.compare(password, foundUser.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials!' });
  }
  
  const token = jwt.sign({user}, jwtSecret , { expiresIn: '24h' });
  res.status(200).json({ message: 'SignIn successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
