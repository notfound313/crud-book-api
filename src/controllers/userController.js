import  UserService  from "../services/userService.js";

export default class UserController {
  static async getAllUsers(req, res, next){
    try {
      const result =  await UserService.getAllUsers()
      res.status(200).json(result)
    }catch(error){
      next(error)
    }
  }

  static async getUserById(req, res, next){
    try{
      const result = await UserService.getUserById(req.params.id);
      res.status(200).json(result);
    }catch(error){
      next(error)
    }   

  }
  static async deleteUserById(req, res, next){
    try {
      await UserService.deleteUserById(req.params.id);
      res.status(200).json({message :"user berhasil dihapus"})
    }catch(error){
      next(error)
    }
  }
  static async updateUserById(req, res, next){
    try {
      const body = req.body
      const id = req.params.id
      await UserService.updateUserById({id, ...body})
      res.status(200).json({message: "user berhasil diupdate"})
    }catch(error){
      next(error)
    }
  }

  static async createUser(req, res, next){
    try{
      const result = await UserService.createUser(req.body)
      res.status(201).json(result)
    }catch(error){
      next(error)
    }
  }
}


