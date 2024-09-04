import {  NotFoundError, UnauthorizedError, ConflictError } from "../utils/errors.js";
import UserModel from "../models/user-model.js"
import UserDto from "../dtos/user-dto.js"
import bcrypt from "bcrypt"
import tokenService from "../service/token-service.js"

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw new ConflictError(`User with email ${email} already exists`);
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ email, password: hashPassword });

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new NotFoundError("User not found");
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw new UnauthorizedError("Incorrect password");
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto,
        };
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new UnauthorizedError("Token is missing");
        }

        const { valid, message } = await tokenService.verifyRefreshToken(refreshToken);
        if (!valid) {
            throw new UnauthorizedError("Invalid token");
        }

        const tokenFromDb = await tokenService.findRefreshToken(refreshToken);
        if (!tokenFromDb) {
            throw new UnauthorizedError("Token not found");
        }

        const userId = tokenFromDb.user;
        const user = await UserModel.findById(userId);
        if (!user) {
            throw new NotFoundError("User not found");
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });

        return {
            ...tokens,
            user: userDto,
        };
    }
}

export default new UserService();
