import { useToast } from "@chakra-ui/react";
import config from "../../config/urlConfig";
import axios from "axios";
import { useState } from "react";
import usePost from "../../zustands/usePost";

const useCreateComment = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { post, setComments, comments } = usePost();
  const postId = post?._id;
  const createComment = async (content) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${config.baseURL}/api/post/${postId}/comment/send`,
        {
          content: content,
        },
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      setComments(post?._id, data);
    } catch (error) {
      // toast({
      //   title: "Error in create comment",
      //   description: error.response.data.message,
      //   status: "error",
      //   duration: 9000,
      //   isClosable: true,
      // });
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  return { createComment, loading };
};

export default useCreateComment;
