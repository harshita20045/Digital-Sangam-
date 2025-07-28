import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      isAlpha: true,
      minLength: 2,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      isEmail: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      maxLength: 100,

      set: (value) => {
        console.log("setter executed...");
        const saltKey = bcrypt.genSaltSync(12);
        value = bcrypt.hashSync(value, saltKey);
        return value;
      },
    },
    contact: {
      type: String,
      isNumeric: true,
      maxLength: 10,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
      trim: true,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    badges: [
      {
        badgename: {
          type: String,
        },
        badgeImage: {
          type: String,
        },
      },
    ],
    profile: {
      profileImage: {
        type: String,
        default: "https://example.com/default-profile-image.png",
      },

      address: String,
      city: String,
      state: String,
      country: String,
      dob: Date,
      bio: String,
      designation: String,
      socialLinks: [
        {
          platform: {
            type: String,
          },
          url: {
            type: String,
          },
        },
      ],
    }
  },
  {
    timestamps: true, 
    versionKey: false
  }
);

export const User = mongoose.model("user", userSchema);
