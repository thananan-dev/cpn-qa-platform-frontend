import authApis from "../apis/authApis";

const login = async (email, password) => {
  const response = await authApis.login(email, password);
  return response;
};

const signup = async (firstName, lastName, username, email, password) => {
  const response = await authApis.signup(
    firstName,
    lastName,
    username,
    email,
    password
  );
  return response;
};

export default {
  login,
  signup,
};
