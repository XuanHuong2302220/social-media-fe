import axios from "axios";
import { useAuthContext } from "../../contexts/authContext";
import config from "../../config/urlConfig";
import { useToast } from "@chakra-ui/react";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const toast = useToast();

  const logout = async () => {
    await axios.post(`${config.baseURL}/api/auth/logout`);
    try {
      setAuthUser(null);
      localStorage.removeItem("authUser");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data,
        status: "error",
        duration: 3000,
      });
    }
  };
  return { logout };
};

export default useLogout;
