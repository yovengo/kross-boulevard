export function generateAuthError(message) {
  switch (message) {
    case 'INVALID_PASSWORD':
      return 'Incorrect email address or password';
    case 'EMAIL_EXISTS':
      return 'Email address is already exists';
    default:
      return 'Too many attempts please, try again later';
  }
}
