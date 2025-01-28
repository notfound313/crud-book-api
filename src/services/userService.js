import AuthorizationError from "../exceptions/AuthorizationError.js";
import UserRepository from "../repositories/userRepository.js";
import Zodvalidator from "../validations/ZodValidator.js";
import AuthValidator from "../validations/authValidation.js";
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
    return await UserRepository.updateUser(user);
  }

  static async deleteUserById(id){
    return await UserRepository.deleteUserById(id);
  }

  static async createUser(userData){
    const user = Zodvalidator.validate(UserValidation.CREATE, userData)
    return await UserRepository.createUser(user);

  }
  static async verifyCredentialUser(payload){
    const { username, password } = Zodvalidator.validate(AuthValidator.POST, payload)  
    const user = await UserRepository.getPasswordByUsername(username)
    if(password !== user.password ){
      throw new AuthorizationError('Password salah');      
    }
    
    return user
  }
}
 