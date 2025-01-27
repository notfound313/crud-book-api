import TokenManager from "../security/tokenManager";
import AuthorizationError from "../exceptions/AuthorizationError";

const authMiddleware = (req, res, next) => {    
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader) {
            throw new AuthorizationError("access dibatasi silakan login")            
        }
        const token = authHeader.split(' ')[1]
        TokenManager.verifyAccessToken(token)
        next();
    }catch(error){
        throw new AuthorizationError("token tidak valid")
        
    }


}

export default authMiddleware;