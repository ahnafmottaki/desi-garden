function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must include at least one lowercase letter.");
  }

  if (!/[!@#$%^&*(),.?":{}|<>_\-+=\\[\]\/]/.test(password)) {
    errors.push("Password must include at least one special character.");
  }

  return errors;
}

export default validatePassword;
