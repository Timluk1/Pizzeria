import { ValidationError, NotFoundError, UnauthorizedError, ConflictError } from "../utils/errors.js"

const errorMiddleware = (err, req, res, next) => {
    let statusCode = 500; // Значение по умолчанию для неизвестных ошибок
    let message = "Internal Server Error"; // Сообщение по умолчанию

    console.log(err.message)
    if (err instanceof ValidationError) {
        statusCode = err.status || 400;
        message = err.message || "Validation Error";
    } else if (err instanceof NotFoundError) {
        statusCode = err.status || 404;
        message = err.message || "Resource Not Found";
    } else if (err instanceof UnauthorizedError) {
        statusCode = err.status || 401;
        message = err.message || "Unauthorized";
    } else if (err instanceof ConflictError) {
        statusCode = err.status || 409;
        message = err.message || "Conflict";
    }

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};

export default errorMiddleware;
