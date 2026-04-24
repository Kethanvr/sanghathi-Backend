import express from 'express';
import { getRoleByName, getAllRoles } from '../controllers/roleController.js';
import { protect, restrictTo } from "../controllers/authController.js";

const router = express.Router();

router.use(protect);

// Route to get a role by name - restricted
router.get('/roles/:role', restrictTo("admin", "hod", "director"), getRoleByName);

// Route to get all roles - less restricted
router.get('/roles', restrictTo("faculty", "admin", "hod", "director"), getAllRoles);

export default router;
