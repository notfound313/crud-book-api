import express from "express"
import AuthController from "../controllers/authController.js";

const router = express.Router()

router.post('/api/auth', AuthController.postAuthentication);
router.put('/api/auth', AuthController.putAuthentication);
router.delete('/api/auth', AuthController.deleteAuthenticataion);

export default router;