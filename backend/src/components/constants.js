export const USERNAME_MAX_LENGTH = 16;
export const USERNAME_MIN_LENGTH = 4;
export const PASSWORD_MAX_LENGTH = 6;

export const INVALID_USERNAME_CREDENTIALS_LENGTH = `Username cannot be greater than ${USERNAME_MAX_LENGTH} or less than ${USERNAME_MIN_LENGTH} characters long`;
export const INVALID_PASSWORD_CREDENTIALS_LENGTH = `Password cannot be longer than ${PASSWORD_MAX_LENGTH} characters long`;
export const INVALID_EMAIL_CREDENTIALS = '';

export const USERNAME_REQUIRED = 'The username is required.';
export const PASSWORD_REQUIRED = 'The password is required.';

export const INCORRECT_PASSWORD = 'The password provided was incorrect';
export const FAILED_VALIDATION = 'Failed to validate volunteer credentials';

export const INVALID_TOKEN = 'A Invalid token was passed to the server';
export const NO_TOKEN_PASSED = 'A valid token was not provided, you might have to fresh and login again';

export const FAILED_VOLUNTEER_GET = 'Failed to get volunteer login information';
