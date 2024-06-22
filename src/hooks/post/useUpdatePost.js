import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import config from "../../config/urlConfig";
import usePost from "../../zustands/usePost";
import usePostHome from "../../zustands/usePostHome";

const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { post, updatedPost } = usePost();
  const { updatePostHome } = usePostHome();

  const updatePost = async (title, image) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${config.baseURL}/api/posts/${post?._id}`,
        {
          title,
          image,
        },
        {
          withCredentials: true,
        }
      );

      const data = await response.data;
      updatedPost(data);
      updatePostHome(data);
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
