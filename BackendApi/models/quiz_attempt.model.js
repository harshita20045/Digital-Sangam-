import mongoose from "mongoose";

let quizAttempt=mongoose.Schema(
  {
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
    quizId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"quiz"
    }
  }
)