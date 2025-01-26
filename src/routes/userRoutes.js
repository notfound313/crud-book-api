import express from "express"
import UserController from "../controllers/userController.js"

const router = express.Router();

router.get('/api/users/', UserController.getAllUsers);
router.get('/api/users/:id', UserController.getUserById);
router.delete('/api/users/:id', UserController.deleteUserById);
router.put('/api/users/:id', UserController.updateUserById);
router.post('/api/users/', UserController.createUser);

export default router