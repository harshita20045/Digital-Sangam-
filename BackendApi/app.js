import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", () => {
  console.log("Use is working");
});
app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
