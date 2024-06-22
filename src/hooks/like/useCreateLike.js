import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useAuthContext } from "../../contexts/authContext";
import config from "../../config/urlConfig";

const useCreateLike = () => {
  const toast = useToast();
  const { authUser } = useAuthContext();

  const createLike = async (postId) => {
    try {
      await axios.post(
        `${config.baseURL}/api/post/${postId}/like`,
        {
          userLike: authUser._id,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return { createLike };
};

export default useCreateLike;
