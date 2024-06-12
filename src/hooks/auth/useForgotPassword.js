import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import config from "../../config/urlConfig";

const useForgotPassword = () => {
  const [loadingForgetPassword, setLoadingForgetPassword] = useState(false);
  const toast = useToast();

  const forgetPassword = async (email) => {
    setLoadingForgetPassword(true);
    try {
      const response = await axios.post(
        `${config.baseURL}/api/auth/forgot-password`,
        {
          email,
        }
      );

      toast({
        title: "Success",
        description: response.data,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(response);
    } catch (error) {
      toast({
        title: error.response.data,
        status: "error",
        duration: 3000,
      });
      console.log(error);
    } finally {
      setLoadingForgetPassword(false);
    }
  };
  return { forgetPassword, loadingForgetPassword };
};

export default useForgotPassword;
