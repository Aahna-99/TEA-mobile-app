// File path: Validation.ts

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length > 0;
};

export const validateForm = (payload: { email: string, password: string }): { valid: boolean, errors: { email: string, password: string } } => {
  const errors: { email: string, password: string } = { email: '', password: '' };

  if (!validateEmail(payload.email)) {
    errors.email = 'Invalid email format.';
  }

  if (!validatePassword(payload.password)) {
    errors.password = 'Password is required.';
  }

  return {
    valid: errors.email === '' && errors.password === '',
    errors,
  };
};