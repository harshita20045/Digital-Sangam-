
import express from "express";
import {

createDialect,
 deleteDialect,
 getAllDialects,
 getApprovedDialects,
 getUserDialects,
 updateDialectStatus
  
} from "../controller/dialect.controller.js";
import { auth, isAdmin } from "../middleware/auth.js";
import multer from "multer";


const router = express.Router();
const upload = multer({ dest: "public/audio" });
router.post("/add",upload.single("audio"), createDialect);
router.get("/author/:id",  getUserDialects);
router.get("/all",  getAllDialects);
router.put("/update/:id", auth, updateDialectStatus);
router.delete("/delete/:id", auth, deleteDialect);


router.patch("/approve/:id", auth, isAdmin, getApprovedDialects);

router.delete("/delete/:id", auth, isAdmin, deleteDialect);

export default router;
