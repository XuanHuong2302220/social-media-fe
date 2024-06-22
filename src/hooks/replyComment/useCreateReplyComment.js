import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import usePost from "../../zustands/usePost";
import axios from "axios";
import config from "../../config/urlConfig";
import useComment from "../../zustands/useComment";

const useCreateReplyComment = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { post } = usePost();
  const { comment, setReplyComments } = useComment();
  const commentId = comment?._id;
  const createReplyComment = async (content) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.baseURL}/api/post/${post?._id}/comment/${commentId}/reply`,
        {
          content,
        },
        {
          withCredentials: true,
        }
      );
      const data = await response.data.newReplyComment;
      setReplyComments((prev) => [...prev, data]);
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return { createReplyComment, loading };
};

export default useCreateReplyComment;
