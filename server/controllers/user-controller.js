import { validationResult } from "express-validator";
import userService from "../service/user-service.js";
import tokenService from "../service/token-service.js";
import { ValidationError } from "../utils/errors.js";

class UserController {
    async registration(req, res, next) {
        try {
            const { errors } = validationResult(req);
            if (errors.length) {
                const message = errors.map((element) => element.msg).join(", ");
                throw new ValidationError(message);
            }

            const { email, password } = req.body;
            const userData = await userService.registration(email, password);
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                httpOnly: true,
            });

            const { accessToken, user } = userData;
            return res.status(200).json({ accessToken, user });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { errors } = validationResult(req);
            if (errors.length) {
                const message = errors.map((element) => element.msg).join(", ");
                throw new ValidationError(message);
            }
            const { email, password } = req.body;
            const userData = await userService.login(email, password);

            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                httpOnly: true,
            });

            const { accessToken, user } = userData;
            return res.status(200).json({ accessToken, user });
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            res.clearCookie("refreshToken");
            return res.status(200).json({ message: "Successfully logged out" });
        } catch (error) {
            next(error);
        }
    }

    async refresh(req, res, next) {
        try {
            console.log("ФУНКЦИЯ РЕФРЕША ТОКЕНА БЫЛА ВЫЗВАНА")
            const refreshToken = req.cookies.refreshToken;

            if (!refreshToken) {
                return res
                    .status(401)
                    .json({ message: "Unauthorized, no refresh token" });
            }
            const data = await userService.refresh(refreshToken);
            const { accessToken, user } = data;
            
            return res.status(200).json({ accessToken, user });
        } catch (error) {
            next(error);
        }
    }

    async isAccessTokenValid(req, res, next) {
        try {
            const authHeader = req.headers["authorization"];
            const accesToken = authHeader && authHeader.split(" ")[1];

            if (!accesToken) {
                throw new ValidationError("Token is required");
            }

            const { valid } = await tokenService.verifyAccesToken(accesToken);

            if (!valid) {
                return res.status(200).json({ isAccessTokenValid: false });
            }

            return res.status(200).json({ isAccessTokenValid: true });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();