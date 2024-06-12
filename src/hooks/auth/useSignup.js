import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import config from "../../config/urlConfig";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleSuccess = (
    username,
    password,
    email,
    confirmPassword,
    fullName,
    gender,
    birthday
  ) => {
    if (
      !username ||
      !password ||
      !email ||
      !confirmPassword ||
      !fullName ||
      !gender ||
      !birthday
    ) {
      toast({
        title: "All fields are required",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }
    if (password.length < 6 || confirmPassword.length < 6) {
      toast({
        title: "Password must be at least 6 characters",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }
    return true;
  };

  const signup = async (
    username,
    password,
    email,
    confirmPassword,
    fullName,
    gender,
    birthday
  ) => {
    const success = handleSuccess(
      username,
      password,
      email,
      confirmPassword,
      fullName,
      gender,
      birthday
    );
    if (!success) return;
    setLoading(true);
    try {
      const response = await axios.post(`${config.baseURL}/api/auth/signup`, {
        username,
        password,
        email,
        confirmPassword,
        fullName,
        gender,
        birthday,
      });
      toast({
        title: response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
