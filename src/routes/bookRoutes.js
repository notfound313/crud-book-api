import express from "express"
import bookController from "../controllers/bookController.js"
import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.get('/api/books/', authMiddleware, bookController.getAllBooks);
router.get('/api/books/:id', authMiddleware, bookController.getBookById);
router.delete('/api/books/:id', authMiddleware, bookController.deleteBookById);
router.put('/api/books/:id', authMiddleware, bookController.updateBookById);
router.post('/api/books/', authMiddleware, bookController.createBook);

export default router