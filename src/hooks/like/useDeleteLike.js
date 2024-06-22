import axios from "axios";
import config from "../../config/urlConfig";
import { useToast } from "@chakra-ui/react";

const useDeleteLike = () => {
  const toast = useToast();

  const deleteLike = async (postId) => {
    try {
      await axios.delete(`${config.baseURL}/api/post/${postId}/like`, {
        withCredentials: true,
      });
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

  return { deleteLike };
};

export default useDeleteLike;
