import mongoose from "mongoose";
let dialectSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 100,
    },

    
    meaning: {
      hindi: {
        type: String,
      },
      english: {
        type: String,
      },
    },
    language: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "language",
      required: true,
    },
    examples: [
      {
        exampleSentence: {
          type: String,
        },
        exampleMeaning: {
          hindi: { type: String },
          english: { type: String },
        },
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      required: true,
    },
    audioLink: {
      type: String,
      required: true,
      trim: true,
    },
       
  },
  { 
       
    timestamps: true,
  },
  { versionKey: false }
);

export const Dialect = mongoose.model("dialect", dialectSchema);
