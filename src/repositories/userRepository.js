import { where } from "sequelize";
import NotFoundError from "../exceptions/NotFoundError.js";
import User from "../models/user.js"
import AuthorizationError from "../exceptions/AuthorizationError.js";

export default class UserRepository {
    static async createUser(userData) {
        const { fullname, username, password} = userData
        const user = await User.create({ fullname, username, password });
        return user;
        
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

    static async getPasswordByUsername(username){
        const {dataValues:user} = await User.findOne({ where: { username } })
        if (!user){
            throw new AuthorizationError("credentials salah");            
        }
        return user

    }

}