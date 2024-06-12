import { useState } from "react";
import axios from "axios";
import config from "./../../config/urlConfig";
import { useToast } from "@chakra-ui/react";
const useDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const deletePost = async (postId) => {
    setLoading(true);
    try {
      await axios.delete(`${config.baseURL}/api/posts/${postId}`, {
        withCredentials: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return { loading, deletePost };
};

export default useDeletePost;
