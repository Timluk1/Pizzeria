import tokenService from "../service/token-service.js";
import { ValidationError, UnauthorizedError } from "../utils/errors.js"

export async function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const accesToken = authHeader && authHeader.split(' ')[1];
    
        if (!accesToken) {
            throw new ValidationError("Token is required");
        }
        
        const result = await tokenService.verifyAccesToken(accesToken);
        const { valid, expired, message } = result;

        if (expired) {
            throw new UnauthorizedError("Token has expired, please refresh it");
        }

        if (!valid) {
            throw new ValidationError("Invalid token");
        }
        req.user = message;
        next();
    } catch (error) {
        next(error)
    }
}
