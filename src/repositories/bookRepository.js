import NotFoundError from "../exceptions/NotFoundError.js";
import Book from "../models/book.js"

export default class BookRepository {
    static async createBook(bookData) {
        const { title, author, published_year, stock, isbn } = bookData
        const book = await Book.create({ title, author, published_year, stock, isbn });
        return book;
        
    }
      
    static async getAllBooks(){
        const books = await Book.findAll();
        return books       
    }

    static async getBookById(id){
        const book = await Book.findByPk(id);
        if (!book) {
            throw new NotFoundError('Book not found');
        }
        return book;
        
    }
      
    static async updateBookById(bookData){
        const {id, title, author } = bookData
        const book = await Book.findByPk(id)
        if (!book) {
            throw new NotFoundError('Book not found');
        }
        book.title = title;
        book.author = author;
      
        await book.save();
          
    }
      
    static async deleteBookbyId(id){
        const book = await Book.findByPk(id);
        if (!book) {
            throw new NotFoundError('Book not found');
        }
        await book.destroy()
         
    }

}

 