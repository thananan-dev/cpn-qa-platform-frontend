const removeSpecialChars = (str) => {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
};

export default { removeSpecialChars };
