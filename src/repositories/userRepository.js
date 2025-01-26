import NotFoundError from "../exceptions/NotFoundError.js";
import User from "../models/user.js"

export default class UserRepository {
    static async createUser(userData) {
        const { fullname, username, password} = userData
        const book = await User.create({ fullname, username, password });
        return book;
        
    }
      
    static async getAllUsers(){
        const users = await User.findAll();
        return users       
    }

    static async getUserById(id){
        const user = await User.findByPk(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        return user;        
    }
      
    static async updateUser(userData){
        const { fullname } = userData;
        const user = await User.findByPk(id)
        if (!user) {
            throw new NotFoundError('User not found');
        }
        user.fullname = fullname;   
      
        await user.save();          
    }
      
    static async deleteUserById(id){
        const user = await User.findByPk(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        await user.destroy()
         
    }

}