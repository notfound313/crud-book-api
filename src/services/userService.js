import UserRepository from "../repositories/userRepository.js";
import Zodvalidator from "../validations/ZodValidator.js";
import UserValidation from "../validations/userValidation.js";

export default class UserService {
  static async getUserById(id){
    return await UserRepository.getUserById(id)
  }

  static async getAllUsers(){
    return await UserRepository.getAllUsers();
  }

  static async updateUserById(userData){
    const user = Zodvalidator.validate(UserValidation.UPDATE, userData)
    return await UserRepository.updateUserById(user);
  }

  static async deleteUserById(id){
    return await UserRepository.deleteUserbyId(id);
  }

  static async createUser(userData){
  const user = Zodvalidator.validate(UserValidation.CREATE, userData)
    return await UserRepository.createUser(user);

  }
}
 