import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: String,          
    description: String,    
    questions: [
      {
        questionText: String,  
        options: [String],     
        correctAnswer: Number, 
        explanation: String,  
      },
    ],
    timeLimit: Number,      
    passingScore: Number,   
    createdBy: String,      
  },
  { timestamps: true, versionKey: false }  
);

export const Quiz = mongoose.model("quiz", quizSchema);