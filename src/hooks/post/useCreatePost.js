import { useState } from "react";
import axios from "axios";
import config from "./../../config/urlConfig";
import { useToast } from "@chakra-ui/react";
import usePostHome from "../../zustands/usePostHome";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const { postHome, setPostHome } = usePostHome();
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

      const data = await response.data.post;
      setPostHome([data, ...postHome]);
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
