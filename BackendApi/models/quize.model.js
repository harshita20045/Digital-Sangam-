import mongoose from "mongoose";
let quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    questions: [
      {
        question: {
          type: String,
          required: true,
          trim: true,
        },
        options: [
          {
            option: {
              type: String,
              required: true,
              trim: true,
            },
            isCorrect: {
              type: Boolean,
              default: false,
            },
            answer : {
              type: String,
              required: true,
              trim: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  },
  { versionKey: false }
);

export const Quiz = mongoose.model("quiz", quizSchema);
