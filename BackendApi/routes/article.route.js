import express from "express";
import {
  createArticle,
  getAllArticleIncludingUser,
  seeArticleByCurrentUser,
} from "../controller/article.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createArticle);
router.get("/seeYourArticle", seeArticleByCurrentUser);
router.get("/all", getAllArticleIncludingUser);

export default router;
