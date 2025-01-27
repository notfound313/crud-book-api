import Jwt from "jsonwebtoken";

export default class TokenManager {
    static generateAccessToken(id){
        return Jwt.sign(id, process.env.ACCESS_TOKEN_KEY, { expiresIn: '15m' })
    }
    static generateRefreshToken(token){
        return Jwt.sign(token, process.env.REFRESH_TOKEN_KEY )
    }
    static verifyAccessToken(token) {
        return Jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
      }
    static verifyRefresToken(token){
        try {
            const artifacts  = Jwt.decode(token)
            Jwt.verify(artifacts, process.env.REFRESH_TOKEN_KEY)
            return artifacts
            
        }catch(error){
            throw new Error(error.message);
            
        }
    }
}