import { useToast } from "@chakra-ui/react";
import usePost from "../../zustands/usePost";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/urlConfig";

const useGetPost = () => {
  const { post, setPost } = usePost();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${config.baseURL}/api/posts/post/${post?._id}`,
          {
            withCredentials: true,
          }
        );
        const data = await response.data;
        setPost(data);
      } catch (error) {
        // toast({
        //   title: "Error",
        //   description: error.response.data,
        //   status: "error",
        //   duration: 5000,
        //   isClosable: true,
        // });
        console.log("error in get post", error.response.data);
      } finally {
        setLoading(false);
      }
    };
    if (post?._id) {
      getPost();
    }
  }, [setPost, post?._id, toast]);
  return { post, loading };
};

export default useGetPost;
