const isEmail = (email) => {
  const isValid = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  return !isValid ? "Invalid email" : undefined;
};

export default { isEmail };
