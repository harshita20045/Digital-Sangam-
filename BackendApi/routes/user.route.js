import express from "express";

import { signUP, login, logout } from "../controller/user.controller.js";
import { seeArticleByCurrentUser } from "../controller/article.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signUP);
router.post("/login", login);
router.post("/logout", logout);
router.get("/seeYourArticle",auth, seeArticleByCurrentUser)

export default router;
