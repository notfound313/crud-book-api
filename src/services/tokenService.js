import TokenRepository from "../repositories/tokenRepository.js";
import TokenValidator from "../validations/tokenValidation.js";
import Zodvalidator from "../validations/ZodValidator.js";

export default class TokenService{
    static async deleteToken(token){
        Zodvalidator.validate(TokenValidator.CREATE, token)
        return await TokenRepository.deleteRefreshToken(token);
    }
    
    static async addRefreshToken(token){        
        Zodvalidator.validate(TokenValidator.CREATE, token)           
        return await TokenRepository.addRefreshToken(token);
    
    }

}