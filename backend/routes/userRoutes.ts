import express, { Request, Response } from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Route to register a user
router.post('/', registerUser);

// Route to authenticate a user (login)
router.post('/auth', authUser);

// Route to logout a user
router.post('/logout', logoutUser);

// Routes to get and update user profile
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
