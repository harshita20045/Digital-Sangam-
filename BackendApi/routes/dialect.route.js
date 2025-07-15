// routes/dialect.route.js
import express from "express";
import {
  addDialect,
  getMyDialects,
  getAllDialects,
  getPendingDialects,
  getDialectById,
  updateDialect,
  deleteDialect,
  approveDialect,
  rejectDialect,
  getByLanguage,
  searchDialect
} from "../controller/dialect.controller.js";
import { auth, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// User Routes
router.post("/add", auth, addDialect);
router.get("/my", auth, getMyDialects);
router.get("/:id", auth, getDialectById);
router.put("/update/:id", auth, updateDialect);
router.delete("/delete/:id", auth, deleteDialect);

// Admin Routes
router.get("/all", auth, isAdmin, getAllDialects);
router.get("/pending", auth, isAdmin, getPendingDialects);
router.patch("/approve/:id", auth, isAdmin, approveDialect);
router.patch("/reject/:id", auth, isAdmin, rejectDialect);
router.delete("/delete/:id", auth, isAdmin, deleteDialect);

// Extra (search/filter)
router.get("/language/:lang", auth, getByLanguage);
router.get("/search", auth, searchDialect);

export default router;
