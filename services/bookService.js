const Book = require('../models/book');

const createBook = async (bookData) => {
  try {
    const { title, author, published_year, stock, isbn } = bookData
    const book = await Book.create({ title, author, published_year, stock, isbn });
    return book;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllBooks = async () => {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    throw new Error(error.message);
  }
};
 const getBookById = async (id) => {
   try {
     const book = await Book.findByPk(id);
     if (!book) {
       throw new Error('Book not found');
     }
     return book;
   } catch (error) {
     throw new Error(error.message);
   }
 };

 const updateBookById = async (bookData) => {
    const {id, title, author } = bookData
    try {
        const book = await Book.findByPk(id)
        book.title = title;
        book.author = author;

        await book.save();
    } catch (error){
        throw new Error(error.message);
        

    }
}

    const deleteBookbyId = async (id) => {
        try {
            const book = await Book.findByPk(id);
            if (!book) {
                throw new Error('Book not found');
            }
            await book.destroy()
        }catch(error){
            throw new Error(error.message);            
        }
        
}
    
 
 
 module.exports = {
   createBook,
   getAllBooks,
   getBookById,
   updateBookById,
   deleteBookbyId
 };
 