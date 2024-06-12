import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import config from "../../config/urlConfig";
import usePost from "../../zustands/usePost";

const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const updatePost = async (postId, title, image) => {
    setLoading(true);
    try {
      await axios.put(
        `${config.baseURL}/api/posts/${postId}`,
        {
          title,
          image,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return { updatePost, loading };
};

export default useUpdatePost;
