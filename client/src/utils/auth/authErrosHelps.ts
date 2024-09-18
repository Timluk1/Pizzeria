import { AuthErrorResponse } from "./types";

export function getErrorTextAuth(error: AuthErrorResponse | null): string {
    if (error) {
        const { status, message } = error;
        if (status !== "error") {
            return ""
        } else {
            return message
        }
    }
    return ""
}

