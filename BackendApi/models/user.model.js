import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z\s]+$/.test(v); // only letters and spaces
        },
        message: "Name should contain only letters and spaces",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // basic email format
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 100,
      set: (value) => {
        const saltKey = bcrypt.genSaltSync(12);
        return bcrypt.hashSync(value, saltKey);
      },
    },
    contact: {
      type: String,
      required: true,
      trim: true,
      maxlength: 10,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}$/.test(v); // only 10-digit numbers
        },
        message: "Contact must be a 10-digit number",
      },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    badges: [
      {
        badgename: {
          type: String,
          default: "Newbie",
        },
        badgeImage: {
          type: String,
          default: "https://example.com/default-badge.png",
        },
      },
    ],
    profile: {
      country: {
        type: String,
        default: "India",
        trim: true,
      },
      dob: {
        type: Date,
        default: null,
      },
      bio: {
        type: String,
        maxlength: 300,
        default: "This user hasn't written a bio yet.",
      },
      designation: {
        type: String,
        default: "Cultural Enthusiast",
      },
      profileImage: {
        type: String,
        default: "https://example.com/default-profile.png",
      },
      socialLinks: {
        linkedin: {
          type: String,
          default: "",
          validate: {
            validator: function (v) {
              return v === "" || /^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(v);
            },
            message: "Invalid LinkedIn URL",
          },
        },
        twitter: {
          type: String,
          default: "",
          validate: {
            validator: function (v) {
              return v === "" || /^https?:\/\/(www\.)?twitter\.com\/.*$/.test(v);
            },
            message: "Invalid Twitter URL",
          },
        },
        facebook: {
          type: String,
          default: "",
          validate: {
            validator: function (v) {
              return v === "" || /^https?:\/\/(www\.)?facebook\.com\/.*$/.test(v);
            },
            message: "Invalid Facebook URL",
          },
        },
        instagram: {
          type: String,
          default: "",
          validate: {
            validator: function (v) {
              return v === "" || /^https?:\/\/(www\.)?instagram\.com\/.*$/.test(v);
            },
            message: "Invalid Instagram URL",
          },
        },
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("user", userSchema);
