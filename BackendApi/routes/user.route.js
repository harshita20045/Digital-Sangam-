import express from "express";
import multer from "multer";
import {
  signUP,
  verifyAccount,
  login,
  logout,
  createProfile,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

const upload = multer({ dest: "public/profile" });
const router = express.Router();

router.post("/signup", signUP);
router.post("/verification", verifyAccount);
router.post("/login", login);
router.get("/logout", logout);

router.patch("/profile/:userId", upload.single("imageName"), createProfile);
router.get("/:userId", getUserById);
router.get("/", getAllUsers);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
