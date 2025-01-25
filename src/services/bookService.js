import BookRepository from "../repositories/bookRepository.js";
import Zodvalidator from "../validations/ZodValidator.js";
import BookValidation from "../validations/bookValidation.js";

export default class bookService {
  static async getBookById(id){
    return await BookRepository.getBookById(id)
  }

  static async getAllBooks(){
    return await BookRepository.getAllBooks();
  }

  static async updateBookById(bookData){
    const book = Zodvalidator.validate(BookValidation.UPDATE, bookData)
    return await BookRepository.updateBookById(book);
  }

  static async deleteBookById(id){
    return await BookRepository.deleteBookbyId(id);
  }

  static async createBook(bookData){
  const book = Zodvalidator.validate(BookValidation.CREATE, bookData)
    return await BookRepository.createBook(book);

  }
}
 