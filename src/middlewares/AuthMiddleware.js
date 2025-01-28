import TokenManager from "../security/tokenManager.js";
import AuthorizationError from "../exceptions/AuthorizationError.js";

const authMiddleware = (req, res, next) => {    
    try {
        const authHeader = req.headers['authorization'];       
        if(!authHeader) {
            throw new AuthorizationError("access dibatasi silakan login")            
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new AuthorizationError("token tidak ditemukan")
        }     
        TokenManager.verifyAccessToken(token)
       
        next();
    }catch(error){
        throw new AuthorizationError(error.message)
        
    }


}

export default authMiddleware;