class AppError extends Error {
    constructor(status, message) {
        super(message)
        this.status = status;
        this.message = message;
    }
}

class ValidationError extends AppError {
    constructor(message) {
        super(400, message);
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(404, message);
    }
}

class UnauthorizedError extends AppError {
    constructor(message) {
        super(401, message);
    }
}

class ConflictError extends AppError {
    constructor(message) {
        super(409, message);
    }
}

export { ValidationError, NotFoundError, UnauthorizedError, ConflictError };
