import Jwt from "jsonwebtoken";

export default class TokenManager {
    static generateAccessToken(id){
        const payload = { id }
        return  Jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, { expiresIn: '15m' })
    }
    static generateRefreshToken(id){
        const payload = { id }
        return Jwt.sign(payload, process.env.REFRESH_TOKEN_KEY )
    }
    static verifyAccessToken(token) {        
        return Jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
      }
    static verifyRefresToken(token){
        try {
            const { id }  = Jwt.decode(token)
            console.log(id)
            Jwt.verify(token, process.env.REFRESH_TOKEN_KEY)
           
            return id
            
        }catch(error){
            throw new Error(error.message);
            
        }
    }
}