import TokenRepository from "../repositories/tokenRepository";

export default class TokenService{
    static async deleteToken(token){
        return await TokenRepository.deleteRefreshToken(token);
    }
    
    static async addRefreshToken(token){           
        return await TokenRepository.addRefreshToken(token);
    
    }

}