import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import articleRouter from "./routes/article.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database.....");
  })
  .catch((err) => {
    console.error("Database not connected", err);
  });
  app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", userRouter);
app.use("/article", articleRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
