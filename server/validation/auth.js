import { body } from "express-validator";

export const userValidator = [
    body("password", "Длинна пароля должна быть минимум 7 символов").isLength({ min: 7 }),
    body("email", "Неккоректный email").isEmail(),
];
