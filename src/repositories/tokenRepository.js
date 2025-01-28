import NotFoundError from "../exceptions/NotFoundError.js";
import Token from "../models/token.js"

export default class TokenRepository {
    static async addRefreshToken(token) {        
        const refreshToken = await Token.create(token);
        return refreshToken;
        
    }  
    
    static async deleteRefreshToken(token){       
        const refreshToken = await Token.findOne({where:{token}});        
        await refreshToken.destroy()         
    }

    static async verifyRefreshToken(token){        
        const refreshToken = await Token.findOne({where:{token}})
        if(!refreshToken){
            throw new NotFoundError('Token tidak valid');
        }
    }

}