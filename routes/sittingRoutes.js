import express from "express";
import multer from "multer";
import path from "path";
import { getUserProfile, updateUserProfile, deleteAvatar } from "../controllers/sittingController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.get("/profile", getUserProfile);
router.put("/profile/:id", upload.single("avatar"), updateUserProfile);
router.delete("/profile/:id/avatar", deleteAvatar);

export default router;