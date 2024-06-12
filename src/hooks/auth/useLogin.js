import { useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import config from "../../config/urlConfig";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const toast = useToast();

  const handleInputError = (username, password) => {
    if (!username || !password) {
      toast({
        title: "username or password is wrong",
        description: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    if (password.length < 6) {
      toast({
        title: "Password is wrong",
        description: "Password must be at least 6 characters",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }
    return true;
  };

  const login = async (username, password) => {
    const success = handleInputError(username, password);
    if (!success) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${config.baseURL}/api/auth/login`,
        {
          username: username,
          email: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      setAuthUser(data);
      localStorage.setItem("authUser", JSON.stringify(data));
    } catch (error) {
      toast({
        title: error.response.data,
        status: "warning",
        duration: 3000,
      });
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
