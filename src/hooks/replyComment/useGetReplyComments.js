import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config/urlConfig";
import usePost from "../../zustands/usePost";

const useGetReplyComments = (commentId) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { post } = usePost();
  console.log("post", post);
  const [replyComments, setReplyComments] = useState([]);
  useEffect(() => {
    const getReplyComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.baseURL}/api/post/${post?._id}/comment/${commentId}/reply`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data;
        console.log("data", data);
        setReplyComments(data.replyComments);
      } catch (error) {
        // toast({
        //   title: "Error",
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
    if (commentId) {
      getReplyComments();
    }
  }, [commentId, setReplyComments]);
  return { replyComments, loading };
};

export default useGetReplyComments;
