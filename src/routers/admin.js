import express from "express";
const router = express.Router();

import adminController from "../controllers/AdminController.js";
import { authenticateToken } from "../middleware/AuthMiddleware.js";
router.get("/getAllData", authenticateToken, adminController.getAllData);
router.get("/countPackage", authenticateToken, adminController.countPackage);
router.get("/getListUser", authenticateToken, adminController.getListUser);
router.post(
  "/updateStatusUser/:id",
  authenticateToken,
  adminController.updateStatusUser
);
router.get("/getArtwork", authenticateToken, adminController.getAllArtwork);
router.post(
  "/updateArtworkStatus",
  authenticateToken,
  adminController.updateArtworkStatus
);

export default router;
