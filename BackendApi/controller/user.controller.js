
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUP = async (request, response) => {
  try {
    const { name, email, password, contact, role } = request.body;
    const user = await User.findOne({ email });
    if (user) {
      return response.status(400).json({ message: "User already exists" });
    }

    await User.create({
      name,
      email,
      password,
      contact,
      role,
    });

    return response.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(400).json({ message: "User not found" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return response.status(400).json({ message: "Invalid Password" });
    }

    user.password = undefined;
  response.cookie("token", generateToken(user.id,user.email,user.role));

    return response.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (request, response) => {
  try {
    response.clearCookie("token");
    return response.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};



const generateToken = (id, email, role) => {
  const token = jwt.sign({ id, email, role }, process.env.JWT_SECRET, { expiresIn: '9d' });
  return token;
}
