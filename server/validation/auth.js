import { body } from "express-validator";

export const userValidator = [
    body("password", "Password length must be at least 7 characters").isLength({ min: 7 }),
    body("email", "Invalid email").isEmail(),
];
