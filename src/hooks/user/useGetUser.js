import { useToast } from "@chakra-ui/react";
import useUser from "../../zustands/useUser";
import { useEffect } from "react";
import axios from "axios";
import config from "../../config/urlConfig";

const useGetUser = (userId) => {
  const toast = useToast();
  const { user, setUser } = useUser();
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/api/user/profile/${userId}`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data;
        setUser(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.response?.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };
    if (userId) {
      getUser();
    }
  }, [userId, setUser]);
  return { user };
};

export default useGetUser;
