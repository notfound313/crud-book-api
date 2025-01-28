import TokenManager from "../security/tokenManager.js";
import TokenService from "../services/tokenService.js";
import UserService from "../services/userService.js";

export default class AuthController{
    static async postAuthentication(req, res, next){
        try {            
            const { id } =  await UserService.verifyCredentialUser(req.body)            
            const accessToken =  TokenManager.generateAccessToken(id)            
            const refreshToken =  TokenManager.generateRefreshToken(id)   
            const payload = {token:refreshToken}
            await TokenService.addRefreshToken(payload)
            

            res.status(201).json({
               message: "access berhasil login",
               accessToken,
               refreshToken
            })
        }catch(error){
              next(error)
        }        

    }
    static async putAuthentication(req, res, next){
        try {
            const {refreshToken} = req.body
            const id = TokenManager.verifyRefresToken(refreshToken)
            const accessToken = TokenManager.generateAccessToken(id)

            res.status(200).json({
                message:"token berhasil diperbarui",
                accessToken
            })             

        }catch(error){
            next(error)
        }

    }

    static async deleteAuthenticataion(req, res, next){
        try {
            const {refreshToken} = req.body
            TokenManager.verifyRefresToken(refreshToken)
            await TokenService.deleteToken(refreshToken)

            res.status(200).json({
                message:"token berhasil dihapus"                
            })             

        }catch(error){
            next(error)
        }

    }
}