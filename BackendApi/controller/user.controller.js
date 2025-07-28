import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//      http://localhost:3000/user/signup   --------->post
/*
Data :-
{
  "name": "Harshita",
  "email": "baghelharshita2005@gmail.com",
  "password": "12345",
  "contact": "7470361548"
}

*/
export const signUp = async (request, response) => {
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

    return response
      .status(200)
      .json({ message: "Account Verified Successfully" });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

//     http://localhost:3000/user/login   --------->post
/*
Data :-
{
  "email": "baghelharshita2005@gmail.com",
  "password": "12345"
}

*/
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

//     http://localhost:3000/user/logout   --------->get
export const logout = (request, response) => {
  try {
    response.clearCookie("token");
    return response.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

//     http://localhost:3000/user/profile/:userId   --------->patch
/*
  Data  According to profile:-
{
  profile by multer form-data 
  "address": "123 Main St",
  "city": "Anytown",
  "state": "CA",
  "country": "USA",
  "dob": "1990-01-01",
  "bio": "Hello, I'm Harshita!",
  "designation": "Software Engineer",

}
  */
export const createProfile = async (request, response) => {
  try {
    const { userId } = request.params;
    const {
      address,
      city,
      state,
      country,
      dob,
      bio,
      designation,
    } = request.body;
    const profileImage = request.file ? request.file.filename : undefined;
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "profile.address": address,
          "profile.city": city,
          "profile.state": state,
          "profile.country": country,
          "profile.dob": dob,
          "profile.bio": bio,
          "profile.designation": designation,
        },
        $setOnInsert: {
          "profile.profileImage": profileImage,
        },
      },
      { new: true, upsert: true }
    ).select("-password");
    if (!user) return response.status(404).json({ message: "User not found" });
    if (user.profile.profileImage)
      user.profile.profileImage = `http://localhost:3000/profile/${user.profile.profileImage}`;
    return response
      .status(200)
      .json({ message: "Profile created/updated successfully", user });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

//     http://localhost:3000/user/:userId   --------->get
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
//     http://localhost:3000/user/   --------->get
export const getAllUsers = async (request, response) => {
  try {
    const users = await User.find().select("-password");
    return response.status(200).json({ users });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

//     http://localhost:3000/user/:userId   --------->put
export const updateUserProfile = async (request, response) => {
  try {
    const { userId } = request.params;
    const { name, email, contact, role, bio } = request.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email, contact, role, bio },
      { new: true }
    ).select("-password");
    if (!user) return response.status(404).json({ message: "User not found" });
    return response
      .status(200)
      .json({ message: "User updated successfully", user });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

//     http://localhost:3000/user/:userId   --------->delete
export const deleteUser = async (request, response) => {
  try {
    await User.findByIdAndDelete(request.params.userId);
    return response.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
 //    http://localhost:3000/user/search?name=harshita   --------->get
export const getAllUserByName = async (request, response) => {
  try {
    const { name } = request.query;
    console.log(name);
    const users = await User.find({
      name: { $regex: name, $options: "i" },
    }).select("-password");

    if (users.length === 0) {
      return response.status(404).json({ message: "No users found" });
    }
    return response.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Internal Server Error", errorMessage: error.message });
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
