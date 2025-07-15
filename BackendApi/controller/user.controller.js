import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const signUP = async (request, response) => {
  try {
    const { name, email, password, contact, role } = request.body;
    const user = await User.findOne({ email });
    if (user) {
      return response.status(400).json({ message: "User already exists" });
    }

    await User.create({ name, email, password, contact, role });
    await sendEmail(email, name);

    return response.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const verifyAccount = async (request, response) => {
  try {
    const { email } = request.body;
    await User.updateOne({ email }, { $set: { isVerified: true } });

    return response.status(200).json({ message: "Account Verified Successfully" });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) return response.status(400).json({ message: "User not found" });

    if (!user.isVerified)
      return response.status(401).json({ message: "Account not verified" });

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare)
      return response.status(400).json({ message: "Invalid Password" });

    user.password = undefined;
    const token = generateToken(user.id, user.email, user.role);
    response.cookie("token", token);

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

export const createProfile = async (request, response) => {
  try {
    const user = await User.findById(request.params.userId);

    user.profile.imageName = request.file.filename;
    user.profile.address = request.body.address;
    user.name = request.body.name ?? user.name;
    user.contact = request.body.contact ?? user.contact;

    await user.save();
    return response.status(201).json({ message: "Profile updated..." });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (request, response) => {
  try {
    const user = await User.findById(request.params.userId).select("-password");
    if (!user) return response.status(404).json({ message: "User not found" });

    if (user.profile.imageName)
      user.profile.imageName = `http://localhost:3000/profile/${user.profile.imageName}`;

    return response.status(200).json({ user });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllUsers = async (request, response) => {
  try {
    const users = await User.find().select("-password");
    return response.status(200).json({ users });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (request, response) => {
  try {
    const { name, contact, bio } = request.body;
    const user = await User.findByIdAndUpdate(
      request.params.userId,
      { $set: { name, contact, bio } },
      { new: true }
    ).select("-password");

    return response.status(200).json({ message: "User updated", user });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.findByIdAndDelete(request.params.userId);
    return response.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const sendEmail = (email, name) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Account Verification",
      html: `<h4>Dear ${name}</h4>
        <p>Thank you for registration. To verify account please click on below button</p>
        <form method="post" action="http://localhost:3000/user/verification">
          <input type="hidden" name="email" value="${email}"/>
          <button type="submit" style="background-color: blue; color:white; width:200px; border: none; border-radius:10px;">Verify</button>
        </form>
        <p><h6>Thank you</h6>Backend Api Team.</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) reject(error);
      else resolve();
    });
  });
};

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: "9d",
  });
};
