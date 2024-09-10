import jwt from "jsonwebtoken";
import tokenModel from "../models/token-model.js";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "30m",
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: "30d",
        });
        return {
            accessToken,
            refreshToken,
        };
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({
            user: userId,
            refreshToken: refreshToken,
        });
        return token;
    }

    async verifyAccesToken(accessToken) {
        try {
            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            return { valid: true, expired: false, message: decoded };
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                console.error('Token has expired:', error.message);
                return { valid: false, expired: true, message: 'Token has expired' };
            } else {
                console.error('Token verification failed:', error.message);
                return { valid: false, expired: false, message: 'Token verification failed' };
            }
        }
    }

    async verifyRefreshToken(refreshToken) {
        try {
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            return { valid: true, expired: false, message: decoded };
        } catch(error) {
            if (error.name === 'TokenExpiredError') {
                console.error('Token has expired:', error.message);
                return { valid: false, expired: true, message: 'Token has expired' };
            } else {
                console.error('Token verification failed:', error.message);
                return { valid: false, expired: false, message: 'Token verification failed' };
            }
        }
    }

    async findRefreshToken(refreshToken) {
        const data = tokenModel.findOne({"refreshToken": refreshToken});
        return data
    }

    
}

export default new TokenService();
