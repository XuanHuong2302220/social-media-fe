import { useState } from "react";
import usePost from "./../../zustands/usePost";
import axios from "axios";
import config from "./../../config/urlConfig";
import { useToast } from "@chakra-ui/react";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const createPost = async (title, image) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.baseURL}/api/posts`,
        {
          title,
          image,
        },
        {
          withCredentials: true,
        }
      );

      await response.data.post;
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return { loading, createPost };
};

export default useCreatePost;
