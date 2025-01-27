import NotFoundError from "../exceptions/NotFoundError.js";
import Token from "../models/token.js"

export default class TokenRepository {
    static async addRefreshToken(token) {        
        const token = await Token.create(token);
        return token;
        
    }  
    
    static async deleteRefreshToken(token){
        const token = await Token.findOne({where: token});        
        await token.destroy()         
    }

    static async verifyRefreshToken(token){
        const token = await Token.findOne({where:token})
        if(!token){
            throw new NotFoundError('Token not found');
        }
    }

}