import { useState } from "react";
import { toast } from "react-toastify";
import authServices from "../services/authServices";
import authStore from "../stores/authStore";

const useAuth = () => {
  const { saveCredential, logout } = authStore((state) => state);

  const [isLoading, setLoading] = useState(false);

  const onLogin = async (email, password, onSuccess) => {
    try {
      setLoading(true);

      const loginResponse = await authServices.login(email, password);
      saveCredential(loginResponse.data.user, loginResponse.data.token);

      setLoading(false);
      onSuccess();
    } catch (error) {
      setLoading(false);
      toast(error.message, {
        position: "top-center",
        type: "error",
      });
    }
  };

  const onSignup = async (firstName, lastName, username, email, password, onSuccess) => {
    try {
      setLoading(true);

      const signupResponse = await authServices.signup(
        firstName, lastName,
        username,
        email,
        password
      );
      saveCredential(signupResponse.data.user, signupResponse.data.token);

      setLoading(false);
      onSuccess();
    } catch (error) {
      setLoading(false);
      toast(error.message, {
        position: "top-center",
        type: "error",
      });
    }
  };

  const onLogout = async (onSuccess) => {
    logout();
    onSuccess()
  };

  return { isLoading, onLogin, onSignup, onLogout };
};

export default useAuth;
