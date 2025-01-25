import express from "express"
import bookController from "../controllers/bookController.js"

const router = express.Router();

router.get('/api/books/', bookController.getAllBooks);
router.get('/api/books/:id', bookController.getBookById);
router.delete('/api/books/:id', bookController.deleteBookById);
router.put('/api/books/:id', bookController.updateBookById);
router.post('/api/books/', bookController.createBook);

export default router