const bookService = require('../services/bookService');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await bookService.getBookById(req.params.id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createBook: async (req, res) => {
    try {
      const bookData = {
        title: req.body.title,
        author: req.body.author,
        published_year: req.body.published_year,
        stock: req.body.stock,
        isbn: req.body.isbn
      };
      const newBook = await bookService.createBook(bookData);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateBook: async(req, res)=> {
    try {
        const bookData = {
            id : req.params.id,
            title : req.body.title,
            author : req.body.author
        }

        await bookService.updateBookById(bookData);

        res.status(201).json({message: "berhasil diupdate"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  },
  deleteBook : async (req, res) => {
    try {
    await bookService.deleteBookbyId(req.params.id);
    res.status(200).json({message: "buku berhasil dihapus"});
    } catch (error){
        res.status(404).json({message: error.message});
        
    }

    
  }
  
};

module.exports = bookController;