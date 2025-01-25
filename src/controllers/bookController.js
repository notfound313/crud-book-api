import  bookService  from "../services/bookService.js";

export default class BookController {
  static async getAllBooks(req, res, next){
    try {
      const result =  await bookService.getAllBooks()
      res.status(200).json(result)
    }catch(error){
      next(error)
    }
  }

  static async getBookById(req, res, next){
    try{
      const result = await bookService.getBookById(req.params.id);
      res.status(200).json(result);
    }catch(error){
      next(error)
    }   

  }
  static async deleteBookById(req, res, next){
    try {
      await bookService.deleteBookById(req.params.id);
      res.status(200).json({message :"buku berhasil dihapus"})
    }catch(error){
      next(error)
    }
  }
  static async updateBookById(req, res, next){
    try {
      const body = req.body
      const id = req.params.id
      await bookService.updateBookById({id, ...body})
      res.status(200).json({message: "buku berhasil diupdate"})
    }catch(error){
      next(error)
    }
  }

  static async createBook(req, res, next){
    try{
      const result = await bookService.createBook(req.body)
      res.status(201).json(result)
    }catch(error){
      next(error)
    }
  }
}


