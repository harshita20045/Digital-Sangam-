import express from "express";
import {
  createArticle,
  seeMyArticles,
  getAllApprovedArticles,
  getPendingArticles,
  changeArticleStatus,
  deleteArticle,
} from "../controller/article.controller.js";

import { auth, isAdmin, isUser } from "../middleware/auth.js";

const router = express.Router();

// USER
router.post("/create", auth, isUser, createArticle);
router.get("/my-articles", auth, isUser, seeMyArticles);

// PUBLIC / ADMIN
router.get("/approved", auth, getAllApprovedArticles);

// ADMIN ONLY
router.get("/pending", auth, isAdmin, getPendingArticles);
router.patch("/status/:articleId", auth, isAdmin, changeArticleStatus);
router.delete("/:articleId", auth, isAdmin, deleteArticle);

export default router;
